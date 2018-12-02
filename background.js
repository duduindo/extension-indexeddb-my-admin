chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color: '#3aa757'}, () => {
    console.log('The color is green.', window.indexedDB);
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'localhost'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });



  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
  //     console.log(response);
  //   });
  // });

  // chrome.runtime.onMessage.addListener(
  // function(request, sender, sendResponse) {
  //   console.log(sender.tab ?
  //               "from a content script:" + sender.tab.url :
  //               "from the extension");
  //   if (request.greeting == "hello")
  //     sendResponse({farewell: "goodbye"});
  // });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
  });


});
