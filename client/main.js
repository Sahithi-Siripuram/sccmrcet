import Vue from 'vue'
import VueRouter from 'vue-router'
import router from "../imports/ui/Routes"
Vue.use(VueRouter)

import '../imports/ui/plugins'
import App from '../imports/ui/App.vue'

export default router
Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  })
})
