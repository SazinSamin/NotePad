import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

import Todos from "./Todos";
import style from "./css/Homepage.module.css";
import NewTodo from "./NewTodo";
import DateTime from "../Functions/DateTime";
import ToastNotification from "./ToastNotification";
import { successNotification, warningNotification } from "./ToastNotification";
import NoTodoPage from "./NoTodoPage";
import Search from "./Search";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const [backupTodo, setBackupTodo] = useState([]);
  

  const handleNewTodo = (newTodo) => {
    successNotification();
    const completeNewTodo = { ...newTodo, id: uuidv4(), date: DateTime() };
    setTodos((prevTodo) => {
      return [...prevTodo, completeNewTodo];
    });
  };

  useEffect(() => {
    setBackupTodo(todos);
  }, [todos])

  const deleteTodo = (deleteTodoId) => {
    const idx = todos.findIndex((e) => e["id"] === deleteTodoId);
    if (idx >= 0) {
      const updatedTodo = [...todos];
      updatedTodo.splice(idx, 1);
      setTodos(updatedTodo);
    }
    warningNotification();
  };


  const handleSearch = (seachKeyWord) => {
    const seachKeyWordLower = seachKeyWord.toLowerCase();
    const filterAfterSearch = todos.filter((todo) => {
      const todoTitle = todo.title.toLowerCase();
      return todoTitle.startsWith(seachKeyWordLower);
    });
    console.log(filterAfterSearch);
    setBackupTodo(filterAfterSearch);
  }



  return (
    <div className={style.HomePage}>
      <div>
        <h1>Note pad</h1>
        <NewTodo sendTodo={handleNewTodo} />
        <Search handleSearch={handleSearch}/>
      </div>
      <div className={style.Todos}>
          <Todos deleteTodo={deleteTodo} todos={backupTodo} />
      </div>
      <ToastNotification />
    </div>
  );
}
