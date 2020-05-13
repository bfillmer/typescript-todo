import React from 'react';
import TodoListItem from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

function TodoList({ todos, toggleTodo }: Props) {
  return (
    <ul>
      {todos.map(todo => <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />)}
    </ul>
  );
}

export default TodoList