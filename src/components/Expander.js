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
      return create('li', [
          // Database
          create('p', database.name),

          // Stores
          create('ul', database.stores.map(store => {
            return create('li', [
              create('router-link',  {props: {to: `/store/${database.name}/${database.version}/${store.name}/`}}, store.name),

              // Indexes
              create('ul', store.indexes.map(index => {
                return create('li', [
                  create('router-link',  {props: {to: `/store/${database.name}/${database.version}/${store.name}/${index}/`}}, index)
                ])
              }))
            ])
          }))
        ])
    }))
  }
})


const Expander = Vue.component('expander', {
  components: {List},
  data() {
    return {
      databasesFiltered: []
    }
  },
  computed: {
    ...mapGetters({
      filter: 'filterDatabases',
      tree: 'getTree',
      host: 'getHost'
    })
  },
  methods: {
    ...mapActions({
      fetch: 'fetchTree'
    })
  },
  watch: {
    host(value, oldValue) {
      if (value !== oldValue) {
        this.databasesFiltered = this.filter(value)
      }
    },
    databasesFiltered(value) {
      const databases = value

      databases.forEach(database => {
        this.fetch({
          name: database.name,
          version: database.version
        })
      })
    }
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
