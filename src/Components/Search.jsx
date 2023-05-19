import React, { useState } from "react";
import Sresult from "./Sresult";
const Search=()=>{
    const [img,setImg] = useState("");
    const InputEvent=(event)=>{
        const data = event.target.value;
        setImg(data);
    }
    return (
      <>
        <div className="searchbar">
            <input 
            type="text" 
            placeholder="Search Anything" 
            onChange={InputEvent}
            value={img}
            />
        </div>
        {img!=='' ? <Sresult text={img}/> :null}
      </>
    );
  }
  export default Search;