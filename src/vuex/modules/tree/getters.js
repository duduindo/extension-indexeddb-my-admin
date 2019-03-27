export default {
  getTree: state => state.tree,
  getDatabases: (state, context) => {
    const { databases } = state
    const host = context.getHost
    const databasesFiltered = databases.filter(database => database.host === host)

    return databasesFiltered
  }
}
