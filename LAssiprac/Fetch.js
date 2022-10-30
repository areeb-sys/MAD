import React, { useState , useEffect} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {Button, Input} from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getDocu,db, students } from "./Firebase";
import { async } from "@firebase/util";
import firebase from "firebase/compat";
import { DocumentSnapshot, QuerySnapshot } from "firebase/firestore/lite";

const Fetch = ({navigation}) => {

    const [users,setUsers]=useState([]);
    const usersData = []

    function myFetchData(){
      firebase.firestore()
      .collection('student')
      .get()
      .then(querySnapshot =>{
            querySnapshot.forEach(documentSnapshot => {
              usersData.push(documentSnapshot.data());
            });
          }).then(testing=>{
            console.log('New array push is ', usersData);
           // this.setUsers({data:usersData})
          });
          setUsers({usersData})
    }

    useEffect(()=>{
      myFetchData()
      console.log(Fetch)
    },[users.length])


    return (
        <View style={{flex:1, alignSelf:'center', justifyContent:'center'}}>
         
      <FlatList style={{width:'100%'}}
        data={usersData}
        //keyExtractor={item=>usersData}
        renderItem={({item})=>
        (
          <View >

            <Text style={{fontSize: 20, color:'black'}}> Fetching data...</Text>
            <Text style={{fontSize: 20, color:'black'}}>Class: {item.name}: Sub: {item.sub} : Roll: {item.roll}</Text>
          </View>
         
        )
        } 
      />
        </View>
    )

      }
export default Fetch;

      
