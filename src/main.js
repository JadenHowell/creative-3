import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './assets/mockedData.json'

let data = {
  people: mock,
  dates: [],
  user: {
    first_name: "UNKNOWN",
    last_name: "UNKNOWN",
    location: "UNKNOWN",
    profession: "UNKNOWN"
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
