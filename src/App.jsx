import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import "./App.css";
function App() {
  return (
    <>
      <h1>Todo App</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
