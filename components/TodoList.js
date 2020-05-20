import React, { useCallback, useMemo, useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

import { mockTodo } from '../constants/mock';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoList, setTodoList] = useState([mockTodo]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = useCallback(() => {
    setTodoList(todoList.concat({
      id: String(Date.now()),
      title: newTodoTitle,
    }));
  }, [newTodoTitle, setTodoList, todoList]);

  const handleInputChange = useCallback(text => {
    setNewTodoTitle(text);
  }, [setTodoList, todoList]);

  const removeTodo = useCallback(removedId => {
    setTodoList(todoList.filter(todo => todo.id !== removedId));
  }, [setTodoList, todoList]);

  const list = useMemo(() => (
    <FlatList
    contentContainerStyle={styles.list}
      data={todoList}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TodoItem removeTodo={removeTodo} todo={item} />}
    />
  ), [todoList]);

  return (
    <View style={styles.container}>
      <View style={styles.addTodoContainer}>
        <TextInput
          autoFocus
          onChangeText={handleInputChange}
          placeholder='Your task here...'
          style={styles.addTodoInput} />
        <Button onPress={addTodo} style={styles.addTodoButton} title='Add' />
      </View>
      {list}
    </View>
  );
};

export default TodoList;

const inputShadow = {
  elevation: 9,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '70%',
  },
  addTodoButton: {
    height: 30,
  },
  addTodoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    ...inputShadow,
  },
  addTodoInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 35,
    paddingHorizontal: 8,
    width: 200,
  },
  list: {
    justifyContent: 'flex-start',
  },
});
