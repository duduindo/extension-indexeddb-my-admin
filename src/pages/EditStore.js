const {mapActions, mapGetters} = Vuex


const EditStore = Vue.component('EditStore', {
  data() {
    return {
      cursor: '{}',
    }
  },
  computed: {
    ...mapGetters({})
  },
  methods: {
    ...mapActions({}),
    handleUpdate() {
      console.log( this.cursor )
    }
  },
  mounted() {
    const { cursor = {} } = this.$route.query
    const cursorString = JSON.stringify(cursor)
    const cursorFormatted = window.jsonStringFormatter(cursorString, '  ')

    setTimeout(() => {
      this.cursor = cursorFormatted
    }, 2000)
  },
  render(create) {
    const rows = this.cursor.match(/\n/g) ? (this.cursor.match(/\n/g).length + 2) : 1;

    return create('div', [
      create('h1', 'Edit'),
      create('form', [
        create('button', {
          attrs: {
            type: 'button'
          },
          on: {
            click: this.handleUpdate
          }
        }, 'Update'),
        create('hr'),
        create('textarea', {
          attrs: {
            rows,
            autofocus: true,
            autocorrect: 'off',
            spellcheck: false
          },
          domProps: {
            value: this.cursor
          },
          on: {
            input: function (event) {
              this.$emit('input', event.target.value)
            }
          },
          style: {
            width: '100%'
          }
        })
      ])
    ])
  }
})


export default EditStore
