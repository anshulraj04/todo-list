import React from 'react'
import {Todoitems} from "../mycomponents/Todoitems"
const Todos = (props) => {
  return (
    <div className="container">
        <h3> todo list</h3>
      <Todoitems todo={props.todos[0]}/>
    </div>
  )
}

export default Todos
