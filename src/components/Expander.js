/**
 * https://vuejs.org/v2/guide/render-function.html#createElement-Arguments
 */

const {mapActions, mapGetters} = Vuex


const Expander = Vue.component('expander', {
  render(createElement) {
    console.log(this.tree)

    /**
     * Example FOREACH: https://br.vuejs.org/v2/guide/render-function.html#v-if-e-v-for
     */

    return createElement('h2', 'Expander\'s here')
  },
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
