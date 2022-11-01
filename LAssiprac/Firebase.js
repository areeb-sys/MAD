// Import the functions you need from the SDKs you need
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword , connectAuthEmulator} from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
    apiKey: "AIzaSyC3Utux3HBbOfQSOh6vsIF4HOC_mtZS7Sw",
    authDomain: "labprac-ea091.firebaseapp.com",
    projectId: "labprac-ea091",
    storageBucket: "labprac-ea091.appspot.com",
    messagingSenderId: "308945097858",
    appId: "1:308945097858:web:a47acbbe9d0baaa16e509b"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(); 


const colRef = collection(db,'students');
let students = [];
getDocs(colRef)
.then((snapshot)=>{
  //console.log(snapshot.docs);

  snapshot.docs.forEach((doc)=>{
      students.push({ ...doc.data(), id: doc.id})
  }) 
  console.log(students)
})

.catch(err=>{
  console.log(err.message);
})


export{auth, db, app, students};
// Get a list of cities from your database
