import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = ({ removeTodo, todo }) => {
  const { id, title } = todo;

  return (
    <View style={styles.container}>
      <Text style={styles.todo}>{title}</Text>
      <TouchableOpacity onPress={() => removeTodo(id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  removeButton: {
    alignContent: 'center',
    backgroundColor: 'red',
    borderRadius: 2,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  todo: {
    alignItems: 'flex-start',
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
});
