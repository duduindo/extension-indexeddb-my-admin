import Database from './pages/database.js'
import Store from './pages/store.js'


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
    component: Store,
    children: []
  }
]
