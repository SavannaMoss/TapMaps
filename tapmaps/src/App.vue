<template>
  <div id="app">
    <h1>Welcome to TapMaps!</h1>
    <GmapMap
      :center="center"
      :zoom="17"
      style="width:100%;  height: 80%;"
      :options="{styles: styles}">

      <GmapInfoWindow
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen=false">

        <popup
          :category="this.infoOptions.category"
          :building="this.infoOptions.building"
          :key="this.componentKey">
        </popup>

      </GmapInfoWindow>

      <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :label="m.label"
      @click="toggleInfoWindow(m, index), forceRerender()"
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
      // Rerendering key.
      componentKey: 0,

      center: { lat: 28.031, lng: -81.946 },

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
        building: 'beckerBusinessBuilding',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Becker Business',
        }}, {
        position: {
          lat: 28.030575,
          lng: -81.945798
        },
        category: 'academic',
        building: 'berryBuilding',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Berry',
        }}, {
        position: {
          lat: 28.028871,
          lng: -81.950138
        },
        category: 'academic',
        building: 'christoversonHumanitiesBuilding',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Christoverson',
        }}, {
        position: {
          lat: 28.031828,
          lng: -81.950241
        },
        category: 'academic',
        building: 'communications',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Communications',
        }}, {
        position: {
          lat: 28.029709,
          lng: -81.950068
        },
        category: 'academic',
        building: 'danceStudio',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Dance',
        }}, {
        position: {
          lat: 28.030310,
          lng: -81.946372
        },
        category: 'academic',
        building: 'edgeHall',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Edge',
        }}, {
        position: {
          lat: 28.029834,
          lng: -81.949621
        },
        category: 'academic',
        building: 'fineArts',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Fine Arts',
        }}, {
        position: {
          lat: 28.030014,
          lng: -81.948872
        },
        category: 'academic',
        building: 'jenkinsRecitalHall',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Recital Hall',
        }}, {
        position: {
          lat: 28.031454,
          lng: -81.950252
        },
        category: 'academic',
        building: 'nursing',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Nursing',
        }}, {
        position: {
          lat: 28.032615,
          lng: -81.946909
        },
        category: 'academic',
        building: 'ordway',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Ordway',
        }}, {
        position: {
          lat: 28.030533,
          lng: -81.947756
        },
        category: 'academic',
        building: 'polkScience',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Polk Science',
        }}, {
        // Housing
        position: {
          lat: 28.031584,
          lng: -81.943565
        },
        category: 'housing',
        building: 'dellHall',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Dell',
        }}, {
        position: {
          lat: 28.031835,
          lng: -81.943624
        },
        category: 'housing',
        building: 'millerHall',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Miller',
        }}, {
        position: {
          lat: 28.032022,
          lng: -81.943624
        },
        category: 'housing',
        building: 'hollisHall',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Hollis',
        }}, {
        position: {
          lat: 28.040339,
          lng: -81.945086
        },
        category: 'housing',
        building: 'gardenApartments',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Garden',
        }}, {
        position: {
          lat: 28.032726,
          lng: -81.943285
        },
        category: 'housing',
        building: 'jenkinsHall',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Jenkins',
        }}, {
        position: {
          lat: 28.026960,
          lng: -81.937310
        },
        category: 'housing',
        building: 'lakeHollingsworthApartments',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'LHA',
        }}, {
        position: {
          lat: 28.036378,
          lng: -81.955905
        },
        category: 'housing',
        building: 'lakeMortonApartments',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Lake Morton',
        }}, {
        position: {
          lat: 28.032948,
          lng: -81.944403
        },
        category: 'housing',
        building: 'publixCommons',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Greek Suites',
        }}, {
        position: {
          lat: 28.036500,
          lng: -81.945290
        },
        category: 'housing',
        building: 'starApartments',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Star',
        }}, {
        // Resource Offices
        position: {
          lat: 28.031319,
          lng: -81.949262
        },
        category: 'resource',
        building: 'buckner',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Buckner',
        }}, {
        position: {
          lat: 28.031674,
          lng: -81.945853
        },
        category: 'resource',
        building: 'jenkinsFieldhouse',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Fieldhouse',
        }}, {
        position: {
          lat: 28.032470,
          lng: -81.948194
        },
        category: 'resource',
        building: 'rogersBuilding',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Rogers',
        }}, {
        position: {
          lat: 28.032486,
          lng: -81.948865
        },
        category: 'resource',
        building: 'rouxLibrary',
        label: {
          color: 'black',
          fontFamily: '"georgia", sans-serif',
          fontWeight: '500',
          text: 'Roux',
        }}
    ],

    styles: [
          { "elementType": "geometry",
            "stylers": [{"color": "#ebe3cd"}]
          },
          { "elementType": "labels.text.fill",
            "stylers": [{"color": "#523735"}]
          },
          { "elementType": "labels.text.stroke",
            "stylers": [{"color": "#f5f1e6"}]
          },
          { "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#c9b2a6"}]
          },
          { "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#dcd2be"}]
          },
          { "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#ae9e90"}]
          },
          { "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{"color": "#dfd2ae"}]
          },
          { "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{"color": "#dfd2ae"}]
          },
          { "featureType": "poi",
            "elementType": "labels",
            "stylers": [{"visibility": "off"}]
          },
          { "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#93817c"}]
          },
          { "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#a5b076"}]
          },
          { "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#447530"}]
          },
          { "featureType": "road",
            "elementType": "geometry",
            "stylers": [{"color": "#f5f1e6"}]
          },
          { "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{"color": "#fdfcf8"}]
          },
          { "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{"color": "#f8c967"}]
          },
          { "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#e9bc62"}]
          },
          { "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{"color": "#e98d58"}]
          },
          { "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#db8555"}]
          },
          { "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#806b63"}]
          },
          { "featureType": "transit",
            "elementType": "labels",
            "stylers": [{"visibility": "off"}]
          },
          { "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{"color": "#dfd2ae"}]
          },
          { "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#8f7d77"}]
          },
          { "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [{"color": "#ebe3cd"}]
          },
          { "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{"color": "#dfd2ae"}]
          },
          { "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#b9d3c2"}]
          },
          { "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#92998d"}]
          }
        ],

      places: [],

      currentPlace: null,
    };
  },

  components: {
    popup: PopUp
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.category = marker.category;
      this.infoOptions.building = marker.building;

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

<style src='./style.css'>
</style>
