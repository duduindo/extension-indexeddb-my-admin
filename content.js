

// chrome.extension.onConnect.addListener(function(port) {
//   if(port.name == "extension_request" ) {
//     port.onMessage.addListener(function(msg) {
//       if (msg.db) {
//         window.indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args)
//         {
//           var r = sender.target.result;
//           if(r.contains(msg.db)){
//               var openRequest = indexedDB.open(msg.db);
//               // your code
//               port.postMessage({foo: bar}); // your result which you want to send
//           }
//          }
//       }
//   });
// });

console.log('its ok');


// chrome.extension.onConnect.addListener(port => {
//   console.log('Connected');

//   port.onMessage.addListener(message => {
//     console.log(message);
//   });
// });

const db = window.indexedDB.open('gih-reservations', 2);

db.onsuccess = event => {
  const db = event.target.result;

   chrome.runtime.sendMessage({TYPE: 'objectStoreNames', data: db.objectStoreNames})
};


//document.body.onclick = () => chrome.runtime.sendMessage({database: db});
