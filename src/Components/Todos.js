import React, {useState} from "react";

import Todo from "./Todo";
import style from './css/Todos.module.css';


export default function Todos (props) {
  

  return <div>
    <section className={style.Todos}>
      {props.todos.map((todo, idx) => <Todo idx={idx} deleteTodo={props.deleteTodo} todo={todo} key={todo.id}/>)}
    </section>
  </div>
}

