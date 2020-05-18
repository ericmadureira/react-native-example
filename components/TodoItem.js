import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TodoItem = ({ todo }) => {
  const { title } = todo;
  return (
    <View style={styles.container}>
      <Text style={styles.todo}>> {title}</Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    marginTop: 20,
  },
  todo: {
    alignItems: 'flex-start',
    fontSize: 14,
  },
});
