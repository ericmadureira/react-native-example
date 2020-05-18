import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <View style={styles.container}>
      {todoList}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e1e1e1',
    marginTop: 20,
  },
});
