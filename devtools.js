
import './app/library/vuejs-v2.6.9.js'
import './app/library/http-vue-loader-v1.4.0.js'
import App from './app/index.js'



chrome.devtools.panels.create('IndexedDB My Admin', '', 'devtools.html', function(panel) {
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  const app = new Vue({
    render: h => h('<template></template>')
  }).$mount('#app')


  // });
});
