import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const Note = (Props) =>{
    const DeleteNote=()=>{
        Props.deleteNote(Props.id);
    }
    return (
        <>
            <div className="note">
                <h2> {Props.title} </h2>
                <br/>
                <p> {Props.desc}</p>
                <div  className="deleteBar">
                <IconButton className="deleteIcon" onClick={DeleteNote} >
                <DeleteIcon />
                </IconButton>
                </div>
            </div>
        </>
    );
}
export default Note;