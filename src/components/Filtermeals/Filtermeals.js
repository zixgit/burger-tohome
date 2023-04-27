import React from 'react';
import classes from "./Filtermeals.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
 
const Filtermeals = (props) => {
  const inputHandler = e =>{
    const keyword = e.target.value.trim();
    props.onFilter(keyword)};
  
  
  return (
    <div className={classes.Filtermeals}>
        <div className={classes.inputer}>
        <FontAwesomeIcon className={classes.inputicon} icon={faSearch}/>
        <input                    
        onChange={inputHandler}
        className={classes.inputtext} 
        type="text" placeholder={'请输入名称'}></input>
        </div>
    </div>
  )
};

export default Filtermeals;