import tab from './modules/tab/index.js'
import tree from './modules/tree/index.js'
import createOnMessagePlugin from './plugins/createOnMessagePlugin.js'


const plugins = [
  createOnMessagePlugin(chrome.runtime.onMessage)
]

export default {
  modules: {
    tab,
    tree
  },
  plugins,
  strict: true
}
