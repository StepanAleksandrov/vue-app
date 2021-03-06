import Vue from 'vue'
import App from './App'
import {store} from './store/store'

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  components: {App},
  template: '<App/>'
})
