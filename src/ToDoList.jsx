import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
const ToDoList = (props) => {
    const [line,setLine] = useState(false);
    const cutIt=()=>{
        setLine(true);
    }
  return (
    <>
      <li>
        {/* <li> <button className="cancelBtn" onClick={()=>{props.onSelect(props.id);}}> + </button>  {props.text} </li>*/}
        <IconButton 
            style={{
            color:'white',
            backgroundColor:'#8566aa',
            margin:'10px',
            }} aria-label="delete" onClick={cutIt}>
          <DeleteIcon />
        </IconButton>
        <span style={{textDecoration:line ? 'line-through' : 'none'}}>
        {props.text}
        </span>
      </li>
    </>
  );
};
export default ToDoList;
