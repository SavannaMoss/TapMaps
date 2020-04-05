<template>
  <div id="resource">
    <h2>Resource Offices</h2>
    <ul class="list">
      <li v-for="office in resource" v-bind:key="office">
        <h4>{{ office.name }} - {{ office.acronym }}</h4>
        <p>{{ office.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { db } from '../firebase.js';

  export default {
    name: 'resource',
    data() {
      return {
        resource: []
      }
    },
    firestore() {
      return {
        resource: db.collection('resource')
      }
    },
  }
</script>
