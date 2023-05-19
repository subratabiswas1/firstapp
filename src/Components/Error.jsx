import React from "react";
import { NavLink } from "react-router-dom";

const Error=()=>{
    return (
      <>
      <div className="errorPage">
        <h1>404 ERROR !</h1>
        <p>PAGE NOT FOUND</p>
        <NavLink to='/'>Go Back</NavLink>
        </div>
      </>
    );
  }
  export default Error;