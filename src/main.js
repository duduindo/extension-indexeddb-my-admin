import { routes } from './router-config.js'
import Expander from './components/Expander.js'


Vue.use(VueRouter)
Vue.use(Vuex)

// Vuex
const store = new Vuex.Store({})


// Route
const router = new VueRouter({
  routes,
  mode: 'hash'
})


// Sync
sync(store, router)


// Vue
const app = new Vue({
  router,
  store,
  components: {Expander},
  render(createElement) {
    return createElement('div', {}, [
      createElement('h1', 'Hello world!'),
      createElement(Expander)
    ])
  },
  mounted() {
    console.warn(this)
  }
}).$mount('#app')
