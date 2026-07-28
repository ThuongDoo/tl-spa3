import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Shared across every project/client deployment built from this template.
// What differs per deployment is the websiteId, see ./site.js
const firebaseConfig = {
  apiKey: "AIzaSyBCMeaTVcR3432T-_DGwQ5-AZs96x_aLo4",
  authDomain: "webtemplate-2a3e3.firebaseapp.com",
  projectId: "webtemplate-2a3e3",
  storageBucket: "webtemplate-2a3e3.firebasestorage.app",
  messagingSenderId: "413432032297",
  appId: "1:413432032297:web:bd0514e77dbc75eadac038",
  measurementId: "G-VDN0BB0E61",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
