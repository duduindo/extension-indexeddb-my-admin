
chrome.devtools.panels.create('IndexedDB My Admin', '', 'devtools.html', panel => {
	// window.addEventListener('message', event => {
  //   console.log('extension-indexeddb-my-admin: content.js', event);
  // });

  console.log('its ok', Date.now(), chrome.browsingData);
});


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         var port = chrome.tabs.connect(tabs[0].id,{name: "extension_request"});
//             port.postMessage({db: "database_name_example"}); // send database name
//             port.onMessage.addListener(function(msg) {
//               if (msg.foo ) {
//                // do your stuff in extension
//               }
//            }
// }



