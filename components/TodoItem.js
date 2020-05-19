import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = ({ removeTodo, todo }) => {
  const { id, title } = todo;
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => setPressed(!pressed)}
        style={pressed ? styles.todoPressed : styles.todo}>{title}
      </Text>
      <TouchableOpacity onPress={() => removeTodo(id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const buttonShadow = {
  elevation: 4,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  removeButton: {
    alignContent: 'center',
    backgroundColor: 'red',
    borderRadius: 2,
    marginLeft: 7,
    paddingHorizontal: 6,
    paddingVertical: 2,
    ...buttonShadow,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  todo: {
    alignItems: 'flex-start',
    fontSize: 16,
    flexWrap: 'wrap',
    paddingHorizontal: 6,
    paddingVertical: 2,
    paddingRight: 0,
  },
  todoPressed: {
    alignItems: 'flex-start',
    fontSize: 16,
    flexWrap: 'wrap',
    paddingHorizontal: 6,
    paddingVertical: 2,
    color: '#e1e1e1',
  },
});
