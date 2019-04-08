import Database from './pages/Database.js'
import EditStore from './pages/EditStore.js'
import Store from './pages/Store.js'
import HeaderStore from './components/HeaderStore.js'


const Test = Vue.component('Test', {
  render(createElement) {
    return createElement('h1', 'test router')
  }
})


export const routes = [
  {
    path: '/',
    component: Test,
    children: []
  },
  {
    path: '/database/:database/:version/',
    component: Database,
    children: []
  },
  {
    path: '/store/:database/:version/:store/',
    components: {
      default: Store,
      header: HeaderStore
    },
    children: []
  },
  {
    path: '/edit/store/:database/:version/:store/',
    component: EditStore,
    children: []
  },
]
