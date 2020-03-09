<template>
  <div id="app">
    <h1>Welcome to TapMaps!</h1>
    <gmap-map
      :center="center"
      :zoom="17"
      style="width:100%;  height: 800px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 28.031, lng: -81.946 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  methods: {
  },
}
</script>

<style >
  h1 {
    color: red;
  }

</style>