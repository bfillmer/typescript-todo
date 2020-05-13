import React from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const initialTodos: Todo[] = [
  { text: 'Walk the dog', complete: false, },
  { text: 'Write app', complete: true }
]

function App() {
  const [todos, setTodos] = React.useState(initialTodos)

  // const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
  function toggleTodo(selectedTodo: Todo): void {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  // const addTodo: AddTodo = (text: string) => {
  function addTodo(text: string): void {
    const newTodo = { text, complete: false }
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  )
}

export default App
