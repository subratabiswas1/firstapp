// var React = require('react');
// import React from "react";
// var ReactDOM = require('react-dom');
// import ReactDOM from "react-dom";

// -----Processes to render in ReactJs------

// ReactDOM.render(<h1>Hello World!!</h1>,document.getElementById('root'));
// ReactDOM.render(React.createElement("h1",null,"Hello Hello World!!"), document.getElementById('root'));
// var v1 = document.createElement('h1');
// v1.innerHTML= "Fuck off";
// document.getElementById('root').appendChild(v1);

// ---Rendering Multiple Elements in React---

// ReactDOM.render(
//     [
//         <h1>Name:Subrata Biswas</h1>,
//         <p>Very Curious</p>,
//         <h3>Want a girl</h3>
//     ]
//     ,document.getElementById('root')
// );

// ---React Fragment---

// ReactDOM.render(
//     <React.Fragment>
//         <h1>Name:Subrata Biswas</h1>
//         <p>Very Curious</p>
//         <h3>Want a girl</h3>
//     </React.Fragment>
//     ,document.getElementById('root')
// );

// ---Challenge#1---

// ReactDOM.render(
//     <>
//         <h1>Subrata Netflix Pack</h1>
//         <p>List of 5 Best Series</p>
//         <ol>
//             <li>Money Heist</li>
//             <li>Lucifer</li>
//             <li>Lock and Keys</li>
//             <li>Stranger Things</li>
//             <li>Dark</li>
//         </ol>
//     </>
//     ,document.getElementById('root')
// );

// ---JSX Expressions---

// const fileName = "Subrata";
// ReactDOM.render(
//     <>
//         <h1>my name is {fileName}</h1>
//         <p>my lucky number is {5+3}</p>
//     </>
//     ,document.getElementById('root')
// );

// ---Template Literals---

// const fname = "Subrata";
// const lname = "Biswas";
// ReactDOM.render(
//     <>
//         <h1>{`my name is ${fname} ${lname}`}</h1>
//     </>
//     ,document.getElementById('root')
// );

// ---challenge#2---

// const name = "Subrata";
// // let date = new Date();
// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();
// ReactDOM.render(
//     <>
//         <h1>My name is {name}</h1>
//         {/* <p>{`Today's Date is : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p> */}
//         {/* <p>{`Today's Time is : ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>  */}
//         <p>Today's date is : {currdate}</p>
//         <p>Today's time is : {currtime}</p>
//     </>
//     ,document.getElementById('root')
// );

// ---JSX Attributes---

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/300/300";
// const img3 = "https://picsum.photos/400/300";
// const img4 = "https://picsum.photos/600/300";

// ReactDOM.render(
//     <>
//         <h1 contentEditable="true">Subrata Biswas</h1>
//         <img src={img1} alt="random"/>
//         <img src={img2} alt="random"/>
//         <img src={img3} alt="random"/>
//         <a href='https://www.google.com' target="_biswas"><img src={img4} alt="random"/></a>
//     </>
//     ,document.getElementById('root')
// );

//---CSS styling and importing css files ---

// import "./index.css";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";

// ReactDOM.render(
//     <>
//         <h1 className='heading'>Subrata Biswas</h1>
//         <div className="images">
//         <img src={img1} alt="random"/>
//         <img src={img2} alt="random"/>
//         <img src={img3} alt="random"/>
//         </div>
//     </>
//     ,document.getElementById('root')
// );

// ---internal CSS and inline CSS---

// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const heading = {
//     color:'rgb(255, 0, 0)',
//     textAlign : 'center',
//     textTransform:'capitalize',
//     fontWeight: 'bold',
//     textShadow: '0px 2px 2px black',
//     fontFamily: "'Roboto Mono', monospace",
//     margin: '80px 0'
// }
// ReactDOM.render(
//     <>
//         <h1 style={heading}>Subrata Biswas</h1>
//         <div className="images">
//         <img src={img1} alt="random"/>
//         <img src={img2} alt="random"/>
//         <img src={img3} alt="random"/>
//         </div>
//     </>
//     ,document.getElementById('root')
// );

//---mini project---

// const word = "Hello Sir";
// let date = new Date(2023, 5, 1, 1);
// const hr = date.getHours();
// let greet = "";
// const cssStyle = {};
// if (hr >= 1 && hr <= 11) {
//   greet = "Good Morning";
//   cssStyle.color = "green";
// } else if (hr >= 12 && hr <= 19) {
//   greet = "Good Afternoon";
//   cssStyle.color = "orange";
// } else {
//   greet = "Good Night";
//   cssStyle.color = "black";
// }
// ReactDOM.render(
//   <>
//     <div>
//       <h1>
//         {word} , <span style={cssStyle}>{greet}</span>
//       </h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );

// ---React Components---

// import Heading from './Heading';
// import Para from './Para';
// import List from './List';
// ReactDOM.render(
//     <>
//         <Heading/>
//         <Para/>
//         <List/>
//     </>
//     ,document.getElementById('root')
// );

// ---Using App.jsx component---

// import App from './App';

// ReactDOM.render(
//     <App/>
//     ,document.getElementById('root')
// );

// ---ES6 module import export---
// import randomName,{favProg,myName,myNames} from './App'
// import * as all from './App'//to import all export items in one time
// ReactDOM.render(
//     <>
//         <ul>
//            <li>Subrata</li>
//            <li>{randomName}</li>
//            <li>{favProg}</li>
//            <li>{myName()}</li>
//            <li>{myNames()}</li>
//            <li>{all.myNames()}</li>
//            <li>{all.myName()}</li>
//            <li>{all.favProg}</li>
//            <li>{all.default}</li>
//         </ul>
//     </>
//     ,document.getElementById('root')
// );

// ---simple calculator app---
// import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));

// ---spread operator---

// const fullName = {
//     fname : 'subrata',
//     lname : 'biswas',
// };
// const biodata = {
//     id : 1,
//     ...fullName,
//     age : 18,
//     gender : 'male',
// };
// console.log(biodata);

// ---React Router---

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
