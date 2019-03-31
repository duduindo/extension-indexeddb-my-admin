import { routes } from './router-config.js'
import App from './App.js'
import Store from './vuex/store.js'

Vue.use(VueRouter)
Vue.use(Vuex)

// Vuex
const store = new Vuex.Store(Store)

// Router
const router = new VueRouter({
  routes,
  mode: 'hash'
})

// Sync
sync(store, router)


// Panel
chrome.devtools.panels.create('IndexedDB My Admin', '', 'devtools.html', function(panel) {

  // Tabs
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const hasTab = tabs.length

    if (hasTab) {
      store.commit('SET_ID', tabs[0].id)

      // Vue
      new Vue({
        router,
        store,
        render(create) {
          return create(App)
        }
      }).$mount('#app')
    }
  });
});
