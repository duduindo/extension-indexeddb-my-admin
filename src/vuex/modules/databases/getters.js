export default {
  getDatabases: state => {
    const { databases } = state
    const { host } = window.location
    const context = databases.filter(database => database.host === host)

    return context
  }
}
