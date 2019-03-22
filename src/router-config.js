
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
  }
]
