export default {
  fetchTree(context, value) {
    // Send
    chrome.tabs.sendMessage(window.tabId, {type: 'GET_DATABASE_TREE', payload: value});

    // Listener
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      context.dispatch('setTree', request)
    });
  },

  setTree(context, value) {
    context.commit('SET_TREE', value)
  }
}
