import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyD_-qUdR9ZExYfDdsu4QsG6pr1pCec0HmE',
      authDomain: 'vuespa-ce412.firebaseapp.com',
      databaseURL: 'https://vuespa-ce412.firebaseio.com',
      projectId: 'vuespa-ce412',
      storageBucket: 'vuespa-ce412.appspot.com',
      messagingSenderId: '64714209605'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
