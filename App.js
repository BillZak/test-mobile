import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
         <Image source={require("./assets/profile.png")} style={{borderRadius: 50}}/>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput style={styles.input} placeholder="Enter Your Name"/>
        <Text style={styles.label}>Your Gen</Text>
        <TextInput style={styles.input} placeholder="Enter Your Gen"/>
        <Text style={styles.label}>Your Address</Text>
        <TextInput style={styles.input} placeholder="Enter Your Address"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  profile: {
    flex: 4,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    flex: 6,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
  },
  label: {
    padding: 10
  }
  
});
