export default {
  SET_TREE: (state, value) => {
    const { name, version } = value || {}

    if (name && version) {
      state.tree.push({ name, version })
    }
  }
}
