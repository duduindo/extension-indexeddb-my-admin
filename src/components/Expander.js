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
  render(create) {
    return create('ul', this.tree.map(database => {
      return create('li', `${database.name}: ${database.version}`)
    }))
  }
})


const Expander = Vue.component('expander', {
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
  },
  render(create) {
    return create(List, {
      props: {
        tree: this.tree
      }
    })
  }
})


export default Expander
