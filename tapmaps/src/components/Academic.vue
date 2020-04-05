<template>
  <div id="academic">
    <h2>Academic Buildings</h2>
    <ul class="list">
      <li v-for="building in academic" v-bind:key="building">
        <h4>{{ building.name }} - {{ building.acronym }}</h4>
        <p>{{ building.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { db } from '../firebase.js';

  export default {
    name: 'academic',
    data() {
      return {
        academic: []
      }
    },
    firestore() {
      return {
        academic: db.collection('academic')
      }
    },
  }
</script>
