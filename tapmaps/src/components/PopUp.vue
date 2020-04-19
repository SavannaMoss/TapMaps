<template>
  <div id="popup">

    <b-button variant="danger" v-b-modal.modal-scrollable class="circle-icon" @click='help'><b-icon icon="geo-alt"></b-icon></b-button>

    <b-modal id="modal-scrollable" scrollable :title="this.place.acronym" hide-footer="true">

      <!-- Housing such as dorms and apartments. -->
      <div v-if="this.cat === 'housing'">
        <h4>{{ this.place.name }}</h4>
        <ul>
          <li><u>Address</u>: {{ this.place.streetAddress }}</li>
          <li><u>Gender</u>: {{ this.place.gender }}</li>
          <li><u>Features</u>: {{ this.place.features }}</li>
          <li><u>Furnishings</u>: {{ this.place.furnishings }}</li>
          <li><u>Pricing</u>:
            <ul>
              <li>Single - {{ this.place.pricing.single }}</li>
              <li>Double - {{ this.place.pricing.double }}</li>
            </ul>
          </li>
          <li><u>Room Types</u>:
            <ul v-for="(room, index) in this.place.roomTypes" :key="index">
              <li>{{ room }}</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Academic buildings and resource offices. -->
      <div v-else>
        <h4>{{ this.place.name }}</h4>
        <p>{{ this.place.description }}</p>
      </div>

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
    firestore() {
      if (this.cat !== "" && this.build !== "") {
        return {
          place: db.collection(this.cat).doc(this.build),
        }
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

  /* .list {
    list-style: none;
  } */
</style>
