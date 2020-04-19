<template>
  <div id="app">
    <h1>Welcome to TapMaps!</h1>
    <GmapMap
      :center="center"
      :zoom="17"
      style="width:100%;  height: 70%;"
      >
      <!-- :options="mapStyle" -->

      <GmapInfoWindow
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen=false">

        <popup
          :category="this.infoOptions.category"
          :building="this.infoOptions.building">
        </popup>

      </GmapInfoWindow>

      <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      @click="toggleInfoWindow(m, index)"
      />

    </GmapMap>

  </div>
</template>

<script>
import PopUp from './components/PopUp.vue'

export default {
  name: 'App',
  data() {
    return {
      center: { lat: 28.031, lng: -81.946 },

      // mapStyle: [{
      //     "featureType": "poi",
      //     "elementType": "labels",
      //     "stylers": [
      //           { "visibility": "off" }
      //     ]
      // }],

      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,

      infoOptions: {
        category: '',
        building: '',
        pixelOffest: {
          width: 0,
          height: 0}
      },

      markers: [
        { // Academic Buildings
        position: {
          lat: 28.030122,
          lng: -81.941449
        },
        category: 'academic',
        building: 'beckerBusinessBuilding'}, {
        position: {
          lat: 28.030575,
          lng: -81.945798
        },
        category: 'academic',
        building: 'berryBuilding'}, {
        position: {
          lat: 28.028871,
          lng: -81.950138
        },
        category: 'academic',
        building: 'christoversonHumanitiesBuilding'}, {
        position: {
          lat: 28.031828,
          lng: -81.950241
        },
        category: 'academic',
        building: 'communications'}, {
        position: {
          lat: 28.029709,
          lng: -81.950068
        },
        category: 'academic',
        building: 'danceStudio'}, {
        position: {
          lat: 28.030310,
          lng: -81.946372
        },
        category: 'academic',
        building: 'edgeHall'}, {
        position: {
          lat: 28.029834,
          lng: -81.949621
        },
        category: 'academic',
        building: 'fineArts'}, {
        position: {
          lat: 28.030014,
          lng: -81.948872
        },
        category: 'academic',
        building: 'jenkinsRecitalHall'}, {
        position: {
          lat: 28.031454,
          lng: -81.950252
        },
        category: 'academic',
        building: 'nursing'}, {
        position: {
          lat: 28.032615,
          lng: -81.946909
        },
        category: 'academic',
        building: 'ordway'}, {
        position: {
          lat: 28.030533,
          lng: -81.947756
        },
        category: 'academic',
        building: 'polkScience'},
        // { // Housing
        // position: {
        //   lat: 28.031584,
        //   lng: -81.943565
        // },
        // category: 'housing',
        // building: 'dellHall'}, {
        // position: {
        //   lat: 28.031835,
        //   lng: -81.943624
        // },
        // category: 'housing',
        // building: 'millerHall'}, {
        // position: {
        //   lat: 28.032022,
        //   lng: -81.943624
        // },
        // category: 'housing',
        // building: 'hollisHall'}, {
        // position: {
        //   lat: 28.040339,
        //   lng: -81.945086
        // },
        // category: 'housing',
        // building: 'gardenApartments'}, {
        // position: {
        //   lat: 28.032726,
        //   lng: -81.943285
        // },
        // category: 'housing',
        // building: 'jenkinsHall'}, {
        // position: {
        //   lat: 28.026960,
        //   lng: -81.937310
        // },
        // category: 'housing',
        // building: 'lakeHollingsworthApartments'}, {
        // position: {
        //   lat: 28.036378,
        //   lng: -81.955905
        // },
        // category: 'housing',
        // building: 'lakeMortonApartments'}, {
        // position: {
        //   lat: 28.032948,
        //   lng: -81.944403
        // },
        // category: 'housing',
        // building: 'publixCommons'}, {
        // position: {
        //   lat: 28.036500,
        //   lng: -81.945290
        // },
        // category: 'housing',
        // building: 'starApartments'},
        { // Resource Offices
        position: {
          lat: 28.031319,
          lng: -81.949262
        },
        category: 'resource',
        building: 'buckner'}, {
        position: {
          lat: 28.031674,
          lng: -81.945853
        },
        category: 'resource',
        building: 'jenkinsFieldhouse'}, {
        position: {
          lat: 28.032470,
          lng: -81.948194
        },
        category: 'resource',
        building: 'rogersBuilding'}, {
        position: {
          lat: 28.032486,
          lng: -81.948865
        },
        category: 'resource',
        building: 'rouxLibrary'}
    ],

      places: [],

      currentPlace: null,
    };
  },

  components: {
    popup: PopUp
  },

  methods: {
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.category = marker.category;
      this.infoOptions.building = marker.building;
      console.log(this.infoOptions.category, " is ", marker.category);
      console.log(this.infoOptions.building, " is ", marker.building);

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
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
</style>
