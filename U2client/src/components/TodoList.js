import React from "react"
import TodoItem from './TodoItem';

function TodoList(props) {

  return (
    <ul>
      {props.todoItems.map(todoItem => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  )
}

export default TodoList;