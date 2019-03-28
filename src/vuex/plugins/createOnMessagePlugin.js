function createOnMessagePlugin(onMessage) {
  return store => {
    onMessage.addListener(request => {
      switch (request.type) {
        case 'GET_TAB_HOST':
          store.commit('SET_HOST', request.data)
          break

        case 'GET_DATABASE_TREE':
          store.commit('SET_TREE', request.data)
          break
      }
    });
  }
}

export default createOnMessagePlugin
