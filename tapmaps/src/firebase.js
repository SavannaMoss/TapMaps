import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhPqn4MGFG-P6Qo8Nz8ZJKevpBcliCcPg",
  authDomain: "tapmaps-11fa3.firebaseapp.com",
  databaseURL: "https://tapmaps-11fa3.firebaseio.com",
  projectId: "tapmaps-11fa3",
  storageBucket: "tapmaps-11fa3.appspot.com",
  messagingSenderId: "419216722259",
  appId: "1:419216722259:web:e0f15bd4d2dcc5822bf9a6"
});

export const db = firebaseApp.firestore();
