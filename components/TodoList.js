import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { mockTodo } from '../constants/mock';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoList, setTodoList] = useState([mockTodo]);

  const list = useMemo(() => (
    todoList.map((todo, key) => (
      <TodoItem key={key} todo={todo} />
    ))
  ), [todoList]);

  return (
    <View style={styles.container}>
      {list}
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
