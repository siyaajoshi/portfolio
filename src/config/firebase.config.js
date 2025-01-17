import {initializeApp, getApp, getApps} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBPDThyop-3ro0mS3bUxi7tVN3WSjIeBBk",
    authDomain: "siyas-website.firebaseapp.com",
    projectId: "siyas-website",
    storageBucket: "siyas-website.appspot.com",
    messagingSenderId: "319090750309",
    appId: "1:319090750309:web:afd7681e1ecaa73710678c",
    measurementId: "G-KWLCKLVG0N"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};