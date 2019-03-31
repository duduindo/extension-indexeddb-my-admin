export default {
  SET_TREE: (state, value) => {
    const { data, host } = value
    const { name, version, stores } = data || {}

    console.log(opt)

    if (name && version && stores) {
      state.tree.push(data)
    }
  }
}
