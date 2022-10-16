import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,
  Alert, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> My Login Page</Text>

      <Image
        style={styles.imagestyle}
        source={require('./assets/icon.png')}
      />

      <TextInput style={{backgroundColor:'lightgrey',marginBottom:20, marginTop:20}}/>
      <TextInput style={{backgroundColor:'lightgrey'}}/>

      <TouchableOpacity
        style={ {
          backgroundColor: "#DDDDDD",
          padding: 10
        }}
        onPress={()=> Alert.alert('Button Pressed')}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
  imagestyle:{width:400, height:400, backgroundColor:'green'}
});
