import React, { useState } from "react";

import {FaTrashAlt} from 'react-icons/fa';

import style from '../Components/css/Todo.module.css'



export default function Todo(props) {

  const {title, desc, date}= props.todo;


  const handleDelete = () => {
    props.deleteTodo(props.todo.id);
  }


  return (
    <div className={style.Todo}>
      {
        <article>
          <div>
            <h1>{title}</h1>
            <h3>{desc}</h3> 
          </div>
          <p>{date}</p>
          <button onClick={handleDelete} className={style.deleteBtn}><FaTrashAlt></FaTrashAlt></button>
        </article>
      }
    </div>
  );
}
