(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content-script.bfb455e0.js")
    );
  })().catch(console.error);

})();
