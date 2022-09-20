import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
       <View style={{flex:0.20, alignItems:'center', justifyContent:'center'}}>        
        
        <Text style={{fontSize:30,color: 'blue',fontFamily:'Charter BT',fontWeight:'bold'}}>Sign Up </Text>
        
      </View>

      <View secureTextEntry={true} style={{flex:0.50, alignItems:'center', justifyContent:'center'}}>

  <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:40,borderRadius:17}}
          placeholder='Phone no.'
          />

          <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:40,borderRadius:17}}
          placeholder='Email'

          />
          <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:40,borderRadius:17,}}
          placeholder='password'
          />
          <TextInput style={{backgroundColor:'lightgrey', marginBottom:10, width:160, height:40,borderRadius:17,}}
          placeholder='repeat password'
          />

     </View>

     <View style={{flex:0.10, alignItems:'center',justifyContent:'center'}}>



        <TouchableOpacity style={{width:200, height:40, backgroundColor:'blue', alignItems:'center',justifyContent:'center',borderRadius:9}}>
          <Text style={{fontSize:20, color:'white'}}>Sign Up</Text>
        </TouchableOpacity>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
