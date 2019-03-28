export default {
  fetchHost: (context, value) => {
    chrome.tabs.sendMessage(window.tabId, {type: 'GET_TAB_HOST'});
  }
}
