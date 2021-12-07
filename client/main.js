import Vue from 'vue'
import VueRouter from 'vue-router'
import router from "../imports/ui/Routes"
Vue.use(VueRouter)
import VueMeteorTracker from 'vue-meteor-tracker';

Vue.use(VueMeteorTracker);
import '../imports/ui/plugins'
import App from '../imports/ui/App.vue'
import "../imports/startup/accounts-config.js";
export default router
Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  })
})
