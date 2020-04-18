import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
//import {GmapMarker} from 'vue2-google-maps/src/components/marker'
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBfFCrt2DxVXK-1svrlKH_4nctgvPBkiLE",
    libararies: 'places, drawing',
  },

  installComponents: true,
});

//Vue.component('GmapMarker', GmapMarker);
Vue.use(VueFirestore);

new Vue({
  render: h => h(App),
}).$mount('#app')
