import { routes } from './router-config.js'
import Expander from './components/Expander.js'
import Store from './vuex/store.js'

Vue.use(VueRouter)
Vue.use(Vuex)

// Vuex
const store = new Vuex.Store(Store)


// Route
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
    const hasTab = tabs.length;

    if (hasTab) {
      window.tabId = tabs[0].id

      // Vue
      new Vue({
        router,
        store,
        components: {Expander},
        render(createElement) {
          // <div>
          return createElement('div', {
            class: 'l-container',
            id: 'app'
          }, [
            // <aside>
            createElement('aside', {
              class: 'l-aside'
            }, [
              createElement('h3', 'logo'),
              createElement(Expander)
            ]),

            // <header>
            createElement('header', 'header text', {
              class: 'l-masthead'
            }),

            // <main>
            createElement('main', {
              class: 'l-main'
            }, [ createElement('router-view') ])
          ])
        },
        mounted() {
          console.log(this)
        }
      }).$mount('#app')
    }
  });
});
