



const Store = Vue.component('Store', {
  mounted() {
    const { database, version, store } = this.$route.params


  },
  render(create) {
    return create('h1', 'Im a Store 2')
  }
})


export default Store
