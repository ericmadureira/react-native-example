import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>To-do List</Text>
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
  },
});
