import { useEffect } from "react";

import style from './css/Search.module.css'

export default function Search (props) {


  const handleChange = (event) => {
    props.handleSearch(event.target.value);
  }



  return (<div className={style.Search}>
    <h3>Search Todo</h3>
    <input onChange={handleChange} type="text"></input>
  </div>)
}