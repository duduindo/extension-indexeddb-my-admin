import Expander from './components/Expander.js'

const {mapActions, mapGetters} = Vuex


const App = Vue.component('app', {
  components: {Expander},
  methods: {
    ...mapActions({
      fetch: 'fetchHost'
    })
  },
  mounted() {
    this.fetch()
  },
  render(create) {
    return create('div', {
      class: 'l-container',
      id: 'app'
    }, [

      // <aside>
      create('aside', {
        class: 'l-aside'
      }, [
        create('router-link', {props: { to: '/' }}, 'Go to index'),
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
