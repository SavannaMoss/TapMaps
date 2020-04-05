<template>
  <div id="housing">
    <h2>Housing</h2>
    <ul class="list">
      <li v-for="house in housing" v-bind:key="house">
        <h4>{{ house.name }}</h4>
        <ul class="list">
          <li><u>Address</u>: {{ house.streetAddress }}</li>
          <li><u>Gender</u>: {{ house.gender }}</li>
          <li><u>Features</u>: {{ house.features }}</li>
          <li><u>Furnishings</u>: {{ house.furnishings }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import { db } from '../firebase.js';

  export default {
    name: 'housing',
    data() {
      return {
        housing: []
      }
    },
    firestore() {
      return {
        housing: db.collection('housing')
      }
    },
  }
</script>
