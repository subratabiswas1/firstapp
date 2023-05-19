// ---using createContext hook---

// import React from "react";
// import ComC from "./ComC";
// const ComB = () =>{
//   return (
//     <>
//       <ComC/>
//     </>
//   );
// };
// export default ComB;

// ---using useContext hook ---

import React,{ useContext } from "react";
import ComC from "./ComC";
import { FirstName, LastName } from "../App";
const ComB = () =>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <>
      <h1>My name is {fname} {lname}</h1>
    </>
  );
};
export default ComB;
