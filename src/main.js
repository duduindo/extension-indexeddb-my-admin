import { routes } from './router-config.js'

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
  render(createElement) {
    return createElement('h1', 'Oi')
  },
}).$mount('#app')
