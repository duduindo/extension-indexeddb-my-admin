export default {
  fetchHost: (context, value) => {
    chrome.tabs.sendMessage(window.tabId, {type: 'GET_TAB_HOST'});

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      context.dispatch('setHost', request)
    });
  },

  setHost: (context, value) => {
    context.commit('SET_HOST', value)
  }
}
