// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-kGrghZROqPE3KKlbbF_1YtKwcc-6YAc",
  authDomain: "crudop-e988f.firebaseapp.com",
  projectId: "crudop-e988f",
  storageBucket: "crudop-e988f.appspot.com",
  messagingSenderId: "1081901882548",
  appId: "1:1081901882548:web:cd9558d0f79c67adbd4be1"
};

export const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);