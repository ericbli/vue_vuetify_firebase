import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {

  apiKey: "AIzaSyDYscJP_3va7-BEfvBVhq2gO2EryHRPBQ8",
  authDomain: "vuevuetifytodo.firebaseapp.com",
  databaseURL: "https://vuevuetifytodo.firebaseio.com",
  projectId: "vuevuetifytodo",
  storageBucket: "",
  messagingSenderId: "112075399268",
  appId: "1:112075399268:web:b9c26a8795969351"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;