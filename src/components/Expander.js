/**
 * https://vuejs.org/v2/guide/render-function.html#createElement-Arguments
 */

const {mapActions, mapGetters} = Vuex


const List = Vue.component('list', {
  props: {
    tree: {
      type: Array,
      required: true,
      default: []
    },
  },
  render(createElement) {
    return createElement('ul', this.tree.map(database => {
      return createElement('li', `${database.name}: ${database.version}`)
    }))
  }
})


const Expander = Vue.component('expander', {
  render(createElement) {
    return createElement(List, {
      props: {
        tree: this.tree
      }
    })
  },
  components: {List},
  computed: {
    ...mapGetters({
      databases: 'getDatabases',
      tree: 'getTree'
    })
  },
  methods: {
    ...mapActions({
      fetch: 'fetchTree'
    })
  },
  mounted() {
    const { databases } = this

    databases.forEach(database => {
      this.fetch({
        name: database.name,
        version: database.version
      })
    })
  }
})


export default Expander
