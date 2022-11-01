import React, { useState , useEffect} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {Button, Input} from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getDocu,db, students } from "./Firebase";
import { async } from "@firebase/util";
import firebase from "firebase/compat";
import { DocumentSnapshot, QuerySnapshot } from "firebase/firestore/lite";

const Fetch = ({navigation}) => {

    console.log(students);

    return (
      <View style = {styles.container}>
      
      </View>
  )
}
export default Fetch;

      
const styles = StyleSheet.create({
  button: {
      width: 200,
      marginTop: 10,

  },
  container:{
      flex: 1,
      alignItems: 'center',
      padding: 10
  }
})