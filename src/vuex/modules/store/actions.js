export default {
  fetchStore(context, value) {
    const id = context.getters.getID

    chrome.tabs.sendMessage(id, {type: 'GET_DATABASE_STORE', payload: value});
  }
}
