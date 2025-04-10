import React from 'react'

 export const Todoitems = ({todo}) => {

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
    </div>
  )
}

export default Todoitems
