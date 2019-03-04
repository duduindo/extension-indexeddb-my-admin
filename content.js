
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {


  chrome.runtime.sendMessage(location.href)
});


// i.getStoreNamesToArray().then(e => console.log(e)).catch(e => console.error(e));
// i.getAllKeysFromObjectStore('reservations').then(e => console.log(e)).catch(e => console.error(e));
// i.getAllValuesFromObjectStore('reservations').then(e => console.log(e)).catch(e => console.error(e));
// i.getAllFromObjectStore('reservations').then(e => console.log(e)).catch(e => console.error(e));

