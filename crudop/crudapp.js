// import { StatusBar } from 'expo-status-bar';
// import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
// import { StyleSheet, Text, View , Button, onPress, TextInput} from 'react-native';
// import { useState } from 'react';
// import {db} from './Home';


// export default function crudapp() {


//   const [userDoc, setUserDoc] = useState(null)

//   const [text, setText] = useState("")
 
//     const Create = () =>{
//       const myDoc = doc(db, "Student", "s1")


//       const docData = {
//         "Name": "Areeb",
//         "class": "BSE",
//         "roll": 22
//       }
    
//       setDoc(myDoc, docData)
        
//         .then(() => {

//           alert("Document Created!")
//         })
//         .catch((error) => {

//           alert(error.message)
//         })
    
    
//     }

//   const Read = () =>{
//     const myDoc = doc(db, "Student", "s1")

//     getDoc(myDoc)
//       .then((snapshot) => {
//         if (snapshot.exists) {
//           setUserDoc(snapshot.data())
//         }
//         else {
//           alert("No Doc Found")
//         }
//       })
//       .catch((error) => {
//         alert(error.message)
//       })
    
//   }

//   const Update = (value, merge) =>{
//     const myDoc = doc(db, "Student", "s1")

    
//     setDoc(myDoc, value, { merge: merge })
     
//       .then(() => {
   
//         alert("Updated Successfully!")
//         setText("")
//       })
//       .catch((error) => {

//         alert(error.message)
//       })

 
//   }
//   const Delete = () =>{
//     const myDoc = doc(db, "Student", "s1")

//     deleteDoc(myDoc)
    
//       .then(() => {
      
//         alert("Deleted Successfully!")
//       })
//       .catch((error) => {
        
//         alert(error.message)
//       })

//   }




//   return (
//     <View style={styles.container}>
//       <Button title="Create new Student" style = {styles.button} onPress={Create}></Button>
//       <Button title="Read Doc" style = {{color:'red'}} onPress={Read}></Button>
      
//         <TextInput style={{
//         width: '30%',
//         fontSize: 18,
//         padding: 12,
//         borderColor: 'gray',
//         borderWidth: 0.2,
//         borderRadius: 10,
//         marginVertical: 20
//       }} placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

//       <Button title='Update Doc' onPress={() => {
//         Update({
//           "Name": text
//         }, true)
//       }} disabled={text == ""}></Button>
//   <Button title='Delete Doc' onPress={Delete}></Button>
//       {
//         userDoc != null &&
//         <Text style={{fontSize:30}}>Name: {userDoc.Name},
//          class: {userDoc.class}, roll: {userDoc. roll}</Text>
//       }
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 0,
    
//   },
//   button:{
//     backgroundColor:'#yellow',
//     }
// });
