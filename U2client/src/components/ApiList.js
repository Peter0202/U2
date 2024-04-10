import React from "react"

function TodoList(props) {

  return (
    <ul>
      {props.apiItems.map(summary => (
        <span>{summary}</span>
      ))}
    </ul>
  )
}

export default TodoList;