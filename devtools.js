
chrome.devtools.panels.create('IndexedDB My Admin', '', 'devtools.html', function(panel) {
	const form = document.querySelector('form');
  const submit = form.querySelector('[name="submit"]');
  const database = form.querySelector('[name="database"]');
  const version = form.querySelector('[name="version"]');
  const objectName = form.querySelector('[name="object_name"]');


  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Send
    //
    submit.addEventListener('click', () => {
      const action = {
        action: 'GET_CURSOR_ALL',
        data: {
          database: database.value,
          version: version.valueAsNumber,
          objectName: objectName.value,
        },
      };

      chrome.tabs.sendMessage(tabs[0].id, {action});
    });

    // Receive
    //
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      console.log(request);
    });
  });
});
