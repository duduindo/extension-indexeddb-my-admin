export default {
  SET_HOST: (state, value) => {
    const { data, host } = value

    state.host = data
  }
}
