import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";


const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  };

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      {!todos.length ? <h2>Nothing To Do (Yet)</h2> : <h2>List Of Things To Do</h2>}
      <ul>
        {todos.map(todo =>
          <li>
            <Todo
              value={todo.id}
              todo={todo.todo}
              removeTodo={e => removeTodo(todo.id)} />
          </li>
          )}
      </ul>
    </>
  );
};


export default TodoList;
