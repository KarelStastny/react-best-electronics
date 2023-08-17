import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYkgCCMd3E1mC-SR6Ad7h5Bm_ken9Wxls",
  authDomain: "best-electronic.firebaseapp.com",
  projectId: "best-electronic",
  storageBucket: "best-electronic.appspot.com",
  messagingSenderId: "545750508698",
  appId: "1:545750508698:web:9bd41bd056b7cf5644eb23",
};

// Počáteční initializace
firebase.initializeApp(firebaseConfig);

const ShopFirestore = firebase.firestore(); // Počáteční initializace služeb
const ShopStorage = firebase.storage(); // Inicializace modulu Storage

export { ShopFirestore, ShopStorage };
