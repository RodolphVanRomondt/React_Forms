import React from "react";
import BoxList from "./colorBoxMaker/BoxList";
import TodoList from "./todoApp/TodoList";
import "./App.css";

const App = () => (
  <div className="App">
    <BoxList/>
    <TodoList />
  </div>
);


export default App;
