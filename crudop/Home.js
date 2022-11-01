
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import React, { Component, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'


//   // Import the functions you need from the SDKs you need
//   import firebase, { initializeApp } from "firebase/app";
//   // import * as firebase from "firebase";

//   // import firebase from 'firebase/app';
//   import 'firebase/auth';
//   import 'firebase/firestore';

//   // import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA3__9va2vzu-4x_9qWHDn4ntnXGoTkn50",
//   authDomain: "fir-expo-fa5da.firebaseapp.com",
//   projectId: "fir-expo-fa5da",
//   storageBucket: "fir-expo-fa5da.appspot.com",
//   messagingSenderId: "687421685940",
//   appId: "1:687421685940:web:e3679f8a95c51c78f857e1"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-kGrghZROqPE3KKlbbF_1YtKwcc-6YAc",
  authDomain: "crudop-e988f.firebaseapp.com",
  projectId: "crudop-e988f",
  storageBucket: "crudop-e988f.appspot.com",
  messagingSenderId: "1081901882548",
  appId: "1:1081901882548:web:cd9558d0f79c67adbd4be1"
};

 const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
 const db = getFirestore(app);

export default function Home({navigation}) {

  const [userDoc, setUserDoc] = useState(null)

  const [text, setText] = useState("")

  const Create = () =>{
    const myDoc = doc(db, "Student", "s1")


    const docData = {
      "Name": "Areeb",
      "class": "BSE",
      "roll": 22
    }
  
    setDoc(myDoc, docData)
      
      .then(() => {

        alert("Document Created!")
      })
      .catch((error) => {

        alert(error.message)
      })
  
  
  }

  const Read = () =>{
    const myDoc = doc(db, "Student", "s1")

    getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          setUserDoc(snapshot.data())
        }
        else {
          alert("No Doc Found")
        }
      })
      .catch((error) => {
        alert(error.message)
      })
    
  }



  
  const Update = (value, merge) =>{
    const myDoc = doc(db, "Student", "s1")

    
    setDoc(myDoc, value, { merge: merge })
     
      .then(() => {
   
        alert("Updated Successfully!")
        setText("")
      })
      .catch((error) => {

        alert(error.message)
      })

 
  }
  
  const Delete = () =>{
    const myDoc = doc(db, "Student", "s1")

    deleteDoc(myDoc)
    
      .then(() => {
      
        alert("Deleted Successfully!")
      })
      .catch((error) => {
        
        alert(error.message)
      })

  }

  
  return (
    <View style={{flex:1, backgroundColor:'gray'}}>
      
      {console.log('Return')}

      {/* //<Text style={{fontSize:fonts}}> We are testing </Text> */}

      {/* <Button
          title="Go to Next Screen"
          onPress={() =>
          navigation.navigate('ProfileScreen',{id:'hef34231'})
        }
        /> */}
      
      {/* <Button
          title="Go to Setting Screen"
          onPress={() =>
          navigation.navigate('Settings', { name: 'Akhzar' })
        }
        /> */}

        {/* <Button
          title="Go to Chatting Screen"
          onPress={() =>
          navigation.navigate('Chatting',{id:'bcs1920cs'})
        }
        /> */}

      {/* <Button
          title="Go to Next Functional Component"
          onPress={() =>
            navigation.navigate('HomeForFunctional')
          }
        />

      <Button
          title="Go to Next Class Component"
          onPress={() =>
            navigation.navigate('HomeForClass')
          }
        /> */}

      

       <Button color="green" title="Create new Student" onPress={Create}></Button>
      <Button title="Read Recored"  onPress={Read}></Button>
      
        <TextInput style={{
        width: '30%',
        fontSize: 18,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10,
        marginVertical: 20
      }} placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

      <Button title='Update Doc' onPress={() => {
        Update({
          "Name": text
        }, true)
      }} disabled={text == ""}></Button>
  <Button color="red" title='Delete Record' onPress={Delete}></Button>
      {
        userDoc != null &&
        <Text style={{fontSize:30}}>Name: {userDoc.Name},
         class: {userDoc.class}, roll: {userDoc. roll}</Text>
      } 

    </View> 

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    
  },
  
  
});








// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
// // import ProfileScreen from './ProfileScreen';
// import Top from './Top';
// import Center from './Center';
// import Bottom from './Bottom';
// import React, { Component, useEffect, useState } from 'react';

// var flag = 12;

// export default class Home extends Component {

//   constructor(props){
//     super(props)
//     this.state={
//       count: 0
//     }
//   }

//   static getDerivedStateFromProps(){
//     console.log('getDerivedStateFromProps')
//   }

//   componentDidMount(){
//     console.log('didMount')
//   }

//   getSnapshotBeforeUpdate(){
//     console.log('getSnapshotBeforeUpdate')
//     return null;
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate')
//   }

//   shouldComponentUpdate(){
//     return true
//   }

// //   static getDerivedStateFromProps()
// // shouldComponentUpdate()
// // render()
// // getSnapshotBeforeUpdate()
// // componentDidUpdate()

// // const [count, setCount] = useState(13);
// // const [number, setNumber] = useState(90);
// // const [state, setState] = useState(
// //   {
// //     name:'',
// //     class:'',
// //   }
// // )

// // useEffect(()=>{
// //     console.log('Home useEffect []')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// //     return()=>{
// //       console.log('Home useEffect return []');
// //     }
// // },[])

// // useEffect(()=>{
// //     console.log('useEffect [count]')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// // },[count])

// // useEffect(()=>{
// //     console.log('useEffect [number]')
// //     // flag=120
// //     // setCount(count+2)
// //     // console.log('useEffect flag Value is =',flag)
// // },[number])


// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect []', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [count]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[count])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [number]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[number])

// //   useEffect(()=>{
// //     flag = 190;
// //     console.log('useEffect [props]', flag);
// //     // setCount(count+1);
// //     return()=>{
// //       // console.log('after useEffect');
// //     }
// //   },[props])

//   // useEffect(()=>{
//   //   flag = 190;
//   //   console.log('useEffect', flag);
//   //   setCount(count+1);
//   // },[props])
  
//   render(){
//   return (
//     <View style={{flex:1, backgroundColor:'black'}}>
//       {console.log('Return')}
      
//       {/* <Top name="Akhzar Nazir" /> */}
//       {/* <Center /> */}
//       {/* <Bottom /> */}

//       <Button
//           title="Go to Next Screen"
//           onPress={() =>
//           this.props.navigation.navigate('ProfileScreen',{id:'hef34231'})
//         }
//         />

//       <Button title='Minus' onPress={()=>this.setState({count:1})} />
      
//       <Button
//           title="Go to Setting Screen"
//           onPress={() =>
//           this.props.navigation.navigate('Settings', { name: 'Akhzar' })
//         }
//         />

//     {/* <Button title='PLUS' onPress={()=>setCount(count+1)} />
      
//     <Button title='Minus' onPress={()=>setCount(count-1)} />
    
//     <Button title='Number' onPress={()=>setNumber(number+1)} /> */}
     
//     </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
