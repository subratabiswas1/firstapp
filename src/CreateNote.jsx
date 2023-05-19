import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
const CreateNote = (Props) => {
  const [note, setNote] = useState({
    title: '',
    desc: '',
  });
  const [expand,setExpand]=useState(false);
  const InputEvent = (event) => {
    const { value, name } = event.target;
    console.log(note.title);
    console.log(note.desc);
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const addNote = (note) => {
    console.log(note.title);
    console.log(note.desc);
    Props.passNote(note);
    setNote({
      title: "",
      desc: "",
    });
  };
  const expandIt=()=>{
    setExpand(true);
  }
  const shrinkIt=()=>{
    setExpand(false);
  }
  return (
    <>
      <div className="main_note" onDoubleClick={shrinkIt}>
        <form>
      {expand?
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            onChange={InputEvent}
            name="title"
            value={note.title}
          />:null}
          <textarea
            rows=""
            column=""
            autoComplete="off"
            placeholder="Write a note..."
            onChange={InputEvent}
            name="desc"
            value={note.desc}
            onClick={expandIt}
            style={{outline:'none'}}
          ></textarea>
          {expand?
          <div className="btn">
            <Fab onClick={addNote}>
              <AddIcon className="plus_sign" />
            </Fab>
          </div>:null}
        </form>
      </div>
    </>
  );
};
export default CreateNote;
