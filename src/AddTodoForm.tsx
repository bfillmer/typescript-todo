import React, { SyntheticEvent } from 'react'

interface Props {
  addTodo: AddTodo
}

function AddTodoForm({ addTodo }: Props) {
  const [text, setText] = React.useState('')

  function handleSubmit (e: SyntheticEvent) {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm