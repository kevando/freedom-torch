// -------------------------------------------------
// Microsoft killed Netscape and proceeded to 
// stop all browser innovation. The breakthrough
// innovation that helped Firefox gain market 
// share was tabs. Internet Explorer was so bad
// that simply adding tags let Firefox gain 
// popularity. Fuck Internet Explorer
// -------------------------------------------------

// This script detects Internet Explorer and immediately 
// redirects the user to get the fuck out.


try {

  if (window.document.documentMode) {
    throw new Error("IE detected in documentMode")
  }

  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  // If Internet Explorer, return version number
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    throw new Error("IE Version: " + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
  }

} catch (error) {
  // No Internet Explorers Allowed. GTFO
  
  window.location = "/surfs-down";

  // window.location = "/sorry-no-internet-explorers"; // Your site
  // window.location = "https://www.youtube.com/watch?v=gRelVFm7iJE"; // Bill Gates Deposition
  // window.location = "https://www.mozilla.org/en-US/firefox/new"; // Download a better browser
}
