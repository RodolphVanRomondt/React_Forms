import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {

  const INITIAL_STATE = {
    todo: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);


  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <label className="display-5" htmlFor="todo">Todo</label>
      <input
        id="todo"
        name="todo"
        value={formData.todo}
        onChange={handleChange}
      />
      <button className="btn btn-outline-primary btn-sm">Add New TODO</button>
    </form>
  );
};


export default NewTodoForm;
