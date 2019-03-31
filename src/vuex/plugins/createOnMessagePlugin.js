/*
 * https://vuex.vuejs.org/guide/plugins.html
 */

function createOnMessagePlugin(onMessage) {
  return store => {
    onMessage.addListener(request => {
      const { data, origin: host, type } = request

      switch (type) {
        case 'GET_TAB_HOST':
          store.commit('SET_HOST', { data, host })
          break

        case 'GET_DATABASE_TREE':
          store.commit('SET_TREE', { data, host })
          break
      }
    });

    store.subscribe(mutation => {
      console.log('Plugin. Mutation type: ', mutation.type)
    })
  }
}

export default createOnMessagePlugin
