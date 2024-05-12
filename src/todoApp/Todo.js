import React from "react";
import "./Todo.css";

const Todo = ({ todo, value, removeTodo }) => {

  function handleRemove(e) {
    removeTodo(value);
  }

  return (
    <>
      <div
        className="Todo">
        {todo}
        <i className="bi bi-trash-fill  btn btn-outline-danger btn-sm" onClick={handleRemove}></i>
      </div>
    </>
  )
};

export default Todo;
