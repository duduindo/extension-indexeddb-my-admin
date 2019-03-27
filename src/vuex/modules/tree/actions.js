export default {
  fetchTree(context, value) {
    // Send
    chrome.tabs.sendMessage(window.tabId, {type: 'GET_DATABASE_TREE', payload: value});

    // Listener
    chrome.runtime.onMessage.addListener(request => {
      if (request.type === 'GET_DATABASE_TREE') {
        context.dispatch('setTree', request.data)
      }
    });
  },

  setTree(context, value) {
    context.commit('SET_TREE', value)
  }
}
