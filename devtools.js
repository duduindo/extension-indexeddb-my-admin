
chrome.devtools.panels.create('IndexedDB My Admin', '', 'devtools.html', function(panel) {
	const button = document.querySelector('button');



  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const local = localStorage.getItem('local');

    button.onclick = () => {
      chrome.tabs.sendMessage(tabs[0].id, 'opa');
    };

    button.textContent += Date.now();

    if (local) {
      console.warn('Existe item "local"');
    } else {
      localStorage.setItem('local', 'STORAGE');
    }


    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      console.log(request);
    });
  });
});
