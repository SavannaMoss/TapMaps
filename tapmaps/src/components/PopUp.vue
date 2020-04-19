<template>
  <div id="popup">

    <b-button variant="danger" v-b-modal.modal-scrollable class="circle-icon" @click='help'><b-icon icon="geo-alt"></b-icon></b-button>

    <b-modal id="modal-scrollable" scrollable :title="this.place.name" hide-footer="true">

      <h4>{{ this.place.name }} - {{ this.place.acronym }}</h4>
      <p>{{ this.place.description }}</p>

      <!-- Housing such as dorms and apartments. -->
      <!-- <div v-if="this.cat === 'housing'">
        <h4>{{ this.place.name }}</h4>
        <ul class="list">
          <li><u>Address</u>: {{ this.place.streetAddress }}</li>
          <li><u>Gender</u>: {{ this.place.gender }}</li>
          <li><u>Features</u>: {{ this.place.features }}</li>
          <li><u>Furnishings</u>: {{ this.place.furnishings }}</li>
        </ul>
      </div> -->

      <!-- Academic buildings and resource offices. -->
      <!-- <div v-else>
        <h4>{{ this.place.name }} - {{ this.place.acronym }}</h4>
        <p>{{ this.place.description }}</p>
      </div> -->

    </b-modal>

  </div>
</template>

<script>
  import { db } from '../firebase.js';

  export default {
    name: 'popup',
    props: ['category', 'building'],
    data() {
      return {

        // Explicitly declaring props.
        cat: this.category,
        build: this.building,

        // Firestore data.
        place: {},

        // Bootstrap.
        modalShow: false
      }
    },
    // created(){
    //   let ref = db.collection(this.cat).where(document, '==', this.build)
    //   ref.get().then(snapshot => {
    //     snapshot.forEach(doc => {
    //       this.place = doc.data()
    //     })
    //   })
    // },
    firestore() {
      return {
        place: db.collection(this.cat).doc(this.build),
      }
    },
    methods: {
      help() {
        console.log(this.cat, this.build);
      }
    }
  }
</script>

<style>
  .circle-icon {
    border-radius: 50%;
    padding: 7px;
    width: 40px;
    height: 40px;
  }

  /* Can edit to move */
  .modal {
    position:;
    top:;
    left:;
  }

  .list {
    list-style: none;
  }
</style>
