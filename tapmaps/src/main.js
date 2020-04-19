import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueFirestore from 'vue-firestore';

import VModal from 'vue-js-modal';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBfFCrt2DxVXK-1svrlKH_4nctgvPBkiLE",
    libararies: 'places, drawing',
  },

  installComponents: true,
});

Vue.use(VueFirestore);

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VModal)

new Vue({
  render: h => h(App),
}).$mount('#app')
