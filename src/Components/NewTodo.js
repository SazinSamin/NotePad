import React, { useState } from "react";

import style from './css/NewTodo.module.css';


export default function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleChange = (event) => {
    const eventName = event.target.name;
    setTodo((oldTodo) => {
      return {
        ...oldTodo,
        [eventName]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.sendTodo(todo);
  }


  return (
    <div>
      <form className={style.NewTodo} onSubmit={handleSubmit}>
        <label>Add new Note</label>
        <div>
        <label>Title: </label>  
        <input className={style.title} onChange={handleChange} name="title" type="text"></input>
        </div>
        <div>
        <label>Desc: </label>
        <input className={style.desc} onChange={handleChange} name="desc" type="text"></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
