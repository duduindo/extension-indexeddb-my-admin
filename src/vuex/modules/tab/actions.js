export default {
  fetchHost: (context, value) => {
    chrome.tabs.sendMessage(window.tabId, {type: 'GET_TAB_HOST'});

    chrome.runtime.onMessage.addListener(request => {
      if (request.type === 'GET_TAB_HOST') {
        context.dispatch('setHost', request.data)
      }
    });
  },

  setHost: (context, value) => {
    context.commit('SET_HOST', value)
  }
}
