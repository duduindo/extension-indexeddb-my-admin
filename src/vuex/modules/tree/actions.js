export default {
  fetchTree(context, value) {
    chrome.tabs.sendMessage(window.tabId, {type: 'GET_DATABASE_TREE', payload: value});
  }
}
