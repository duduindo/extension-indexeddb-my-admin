export default {
  SET_STORE: (state, value) => {
    state.store = value
    state.storeFiltered = value
  },
  SET_STORE_FILTERED: (state, value) => {
    state.storeFiltered = value
  }
}
