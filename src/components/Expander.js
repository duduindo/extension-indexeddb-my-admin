/**
 * https://vuejs.org/v2/guide/render-function.html#createElement-Arguments
 */

const Expander = Vue.component('expander', {
  render(createElement) {
    return createElement('h2', 'Expander\'s here')
  }
})



export default Expander
