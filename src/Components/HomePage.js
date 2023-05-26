import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {v4 as uuidv4} from "uuid";

import Todos from "./Todos";
import style from "./css/Homepage.module.css";
import NewTodo from "./NewTodo";
import DateTime from "../Functions/DateTime";
import ToastNotification from "./ToastNotification";
import {successNotification, warningNotification} from "./ToastNotification";


export default function HomePage() {
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (newTodo) => {
    successNotification();
    const completeNewTodo = {...newTodo, id: uuidv4(), date: DateTime()}
    setTodos((prevTodo) => {
      return [
        ...prevTodo, completeNewTodo
      ]
    });

    
  }

  const deleteTodo = (deleteTodoId) => {
    const idx = todos.findIndex(e => e["id"] === deleteTodoId);
    if(idx >= 0) {
      const updatedTodo = [...todos];
      updatedTodo.splice(updatedTodo, 1);
      setTodos(updatedTodo);
    }
    warningNotification();
  }

  return (
    <div>
      <h1>Note pad</h1>
      <NewTodo sendTodo={handleNewTodo}/>
      <div className={style.HomePage}>
        <Todos deleteTodo={deleteTodo} todos={todos} />
      </div>
      <ToastNotification />
    </div>
  );
}
