//
try {
  Components.utils.import("resource://gre/modules/addons/XPIProvider.jsm", {})
    .eval("SIGNED_TYPES.clear()");
}
catch(ex) {}

// https://www.ghacks.net/2016/08/14/override-firefox-add-on-signing-requirement/#comment-4192034
// http://stackoverflow.com/questions/31952727/how-can-i-disable-signature-checking-for-firefox-add-ons
