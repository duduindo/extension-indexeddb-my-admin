import Expander from './components/Expander.js'


const App = Vue.component('app', {
  components: {Expander},
  render(create) {
    // <div>
    return create('div', {
      class: 'l-container',
      id: 'app'
    }, [

      // <aside>
      create('aside', {
        class: 'l-aside'
      }, [
        create('h3', 'logo'),
        create(Expander)
      ]),

      // <header>
      create('header', 'header text', {
        class: 'l-masthead'
      }),

      // <main>
      create('main', {
        class: 'l-main'
      }, [ create('router-view') ])
    ])
  },
})


export default App
