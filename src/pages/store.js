
const {mapActions, mapGetters} = Vuex


const Table = Vue.component('list', {
  props: {
    store: {
      type: Object,
      required: true,
      default: { keyPath: null, keys: [], values: [] }
    },
  },
  render(create) {
    const { values = [], keys = [] } = this.store

    return create('table', [
      // <thead>
      create('thead', [
        create('tr', [
          create('th', 'Actions'),
          create('th', '#'),
          create('th', 'Key (key path: "id")'),
          create('th', 'Value')
        ])
      ]),

      // <tbody>
      create('tbody', values.map((value, index) => {
        const json = JSON.stringify(value)

        return create('tr', [
          create('td', 'Actionss'),
          create('td', index),
          create('td', keys[index]),
          create('td', json)
        ])
      }))
    ])
  }
})


const Store = Vue.component('Store', {
  components: {Table},
  computed: {
    ...mapGetters({
      store: 'getStore',
    })
  },
  methods: {
    ...mapActions({
      fetch: 'fetchStore'
    })
  },
  mounted() {
    const { database: name, version, store } = this.$route.params

    this.fetch({
      name,
      version,
      store
    })
  },
  render(create) {
    return create(Table, {
      props: {
        store: this.store
      }
    })
  }
})


export default Store
