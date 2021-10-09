import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BillList from './Components/BillList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the start of Bills Bills Bills!</Text>
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
      <BillList />
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
  text: {
    marginBottom: 10,
    borderBottomWidth: 1,
  }
});
