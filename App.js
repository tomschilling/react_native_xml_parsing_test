import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import XMLParser from './components/XmlParser';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test app for xml parsing!</Text>
      <XMLParser/>
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
