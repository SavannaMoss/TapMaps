<template>
  <div id="app">
    <h1>Welcome to TapMaps!</h1>
    <GmapMap
      :center="center"
      :zoom="17"
      style="width:100%;  height: 70%;"
      :options="mapStyle"
      >

      <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">

      </GmapInfoWindow>

      <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      @click="toggleInfoWindow(m, index)"
      />

    </GmapMap>

    <app-academic></app-academic>
    <app-housing></app-housing>
    <app-resource></app-resource>

  </div>
</template>

<script>
import Academic from './components/Academic.vue';
import Housing from './components/Housing.vue';
import Resource from './components/Resource.vue';

export default {
  name: 'App',
  data() {
    return {
      center: { lat: 28.031, lng: -81.946 },

      mapStyle: [{
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
                { "visibility": "off" }
          ]
      }],

      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,

      infoOptions: {
        content: '',
        pixelOffest: { width: 0, height: 40}
      },

      markers: [{
        position: {
          lat: 28.030122,
          lng: -81.941449
        },
        infoText: 'BBB'}, {
        position: {
          lat: 28.030575,
          lng: -81.945798
        },
        infoText: 'C'}, {
        position: {
          lat: 28.028871,
          lng: -81.950138
        },
        infoText: 'CH'}, {
        position: {
          lat: 28.031828,
          lng: -81.950241
        },
        infoText: 'CC'}, {
        position: {
          lat: 28.029709,
          lng: -81.950068
        },
        infoText: 'WDS'}, {
        position: {
          lat: 28.030310,
          lng: -81.946372
        },
        infoText: 'E'}, {
        position: {
          lat: 28.029834,
          lng: -81.949621
        },
        infoText: 'M'}, {
        position: {
          lat: 28.030014,
          lng: -81.948872
        },
        infoText: 'RD'}, {
        position: {
          lat: 28.031454,
          lng: -81.950252
        },
        infoText: 'BN'}, {
        position: {
          lat: 28.032615,
          lng: -81.946909
        },
        infoText: 'O'}, {
        position: {
          lat: 28.030533,
          lng: -81.947756
        },
        infoText: 'PS'}, {
        position: {
          lat: 28.031584,
          lng: -81.943565
        },
        infoText: 'Dell'}, {
        position: {
          lat: 28.031835,
          lng: -81.943624
        },
        infoText: 'Miller'}, {
        position: {
          lat: 28.032022,
          lng: -81.943624
        },
        infoText: 'Hollis'}, {
        position: {
          lat: 28.040339,
          lng: -81.945086
        },
        infoText: 'Garden'}, {
        position: {
          lat: 28.032726,
          lng: -81.943285
        },
        infoText: 'Jenkins'}, {
        position: {
          lat: 28.026960,
          lng: -81.937310
        },
        infoText: 'LHA'}, {
        position: {
          lat: 28.036378,
          lng: -81.955905
        },
        infoText: 'Lake M'}, {
        position: {
          lat: 28.032948,
          lng: -81.944403
        },
        infoText: 'Publix'}, {
        position: {
          lat: 28.036500,
          lng: -81.945290
        },
        infoText: 'Star'}, {
        position: {
          lat: 28.031319,
          lng: -81.949262
        },
        infoText: 'B'}, {
        position: {
          lat: 28.031674,
          lng: -81.945853
        },
        infoText: 'JF'}, {
        position: {
          lat: 28.032470,
          lng: -81.948194
        },
        infoText: 'R'}, {
        position: {
          lat: 28.032486,
          lng: -81.948865
        },
        infoText: 'RL'
      }],

      places: [],

      currentPlace: null
    };
  },

  components: {
    appAcademic: Academic,
    appHousing: Housing,
    appResource: Resource
  },

  methods: {
    toggleInfoWindow(marker, idx) {
      console.log('fuk u');
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  },

  // events: ['toggleInfoWindow'],
  // google.maps.event.addListener()
  // mounted() {
  //   this.markers.addEventListener('click', toggleInfoWindow())
  // }
}
</script>

<style >
  #map {
    height: 70%;
    width: 100%;
  }
  h1 {
    color: red;
  }

  h2 {
    text-decoration: underline;
  }

  .list {
    list-style: none;
  }
</style>
