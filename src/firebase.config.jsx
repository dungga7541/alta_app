import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp({
  apiKey: "AIzaSyD2H3YLtz0b8HleHwDXOODstE8auQs9Fag",
  authDomain: "intership-de498.firebaseapp.com",
  databaseURL: "https://intership-de498-default-rtdb.firebaseio.com",
  projectId: "reactjs-648cf",
  storageBucket: "intership-de498.appspot.com",
  messagingSenderId: "825754694813",
  appId: "1:825754694813:web:e568c42dabfd475264d074",
  measurementId: "G-JL1KY4SW4H"
  // apiKey: "AIzaSyDWMxX6LqQcm3Xb3untWlojRl2nUqavtfg",
  // authDomain: "reactjs-648cf.firebaseapp.com",
  // databaseURL: "https://reactjs-648cf-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "reactjs-648cf",
});
var db = firebase.firestore();
export default db;