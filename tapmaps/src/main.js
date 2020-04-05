import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBfFCrt2DxVXK-1svrlKH_4nctgvPBkiLE",
  }
});

Vue.use(VueFirestore);

new Vue({
  render: h => h(App),
}).$mount('#app')
