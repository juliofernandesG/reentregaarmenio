import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDPXUm4MP0QsrvOgCtlJC_h342fB-It-hk",
  authDomain: "reentrega-88e16.firebaseapp.com",
  projectId: "reentrega-88e16",
  storageBucket: "reentrega-88e16.appspot.com",
  messagingSenderId: "871704119401",
  appId: "1:871704119401:web:07288b5da43353f0b27af8",
  measurementId: "G-VVXBX9JKNY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
