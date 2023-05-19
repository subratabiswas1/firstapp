// ---creating App.jsx component---

// import React from "react";
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

// function App(){
//     return (
//         <>
//             <Heading/>
//             <Para/>
//             <List/>
//             <Para/>
//         </>
//     )
// }
// export default App;

// ---Recreating mini project using component---

// import React from 'react';
// function App() {
//   const word = "Hello Sir";
//   let date = new Date(2023, 5, 1, 1);
//   const hr = date.getHours();
//   let greet = "";
//   const cssStyle = {};
//   if (hr >= 1 && hr <= 11) {
//     greet = "Good Morning";
//     cssStyle.color = "green";
//   } else if (hr >= 12 && hr <= 19) {
//     greet = "Good Afternoon";
//     cssStyle.color = "orange";
//   } else {
//     greet = "Good Night";
//     cssStyle.color = "black";
//   }

//   return (
//     <>
//      <div>
//       <h1>
//        {word} , <span style={cssStyle}>{greet}</span>
//        </h1>
//      </div>
//     </>
//   )
// }
// export default App;

// ---ES6 module import export---

// const youtuber = "technical subrata";
// const favProg = "Happy Birthday";
// function myName(){
//     let name = "Subrata";
//     return name;
// }
// function myNames(){
//     let names = "Biswas";
//     return names;
// }
// export default youtuber;
// export {favProg,myName,myNames};

// ---simple calculator app---

// import * as op from './Calc';
// const v1 = 20;
// const v2 = 3;
// function App(){
//     return (
//         <>
//         <ul>
//             <li>sum of numbers : {op.add(v1,v2)}</li>
//             <li>sub of numbers : {op.sub(v1,v2)}</li>
//             <li>mult of numbers : {op.mul(v1,v2)}</li>
//             <li>div of numbers : {op.div(v1,v2)}</li>
//         </ul>
//         </>
//     )
// }
// export default App;

// ----Props in React----

// import Card from './Card';
// function App(){
//     return (
//         <>
//             <Card
//                 imgsrc = "https://occ-0-2506-1432.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABf7PP6jDbzv37R0PwwpbzFanX5NjZq3NxIuhVKjLScQgG_zh7sW_6M5p4-J5nnHocQqVvv0JnEV_hVlTQo8Wc2d8cw.jpg?r=87a"
//                 title = "A Netflix original Series"
//                 sname = "365 days"
//                 link = "https://www.netflix.com/watch/81245964"
//             />
//             <Card
//                 imgsrc = "https://occ-0-58-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbn6Se5Y8okR7IVrxTGwEgA4l8BYIafTux8oN69Rrdup10lMxDpKbAu9MLKmEqu5upd6BRD6ZbJ9f3hULQ0RdjwwwA.jpg?r=309"
//                 title = "A Netflix original Series"
//                 sname = "Little Woman"
//                 link = "https://www.netflix.com/watch/81140933"
//             />
//             <Card
//                 imgsrc = "https://occ-0-58-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcXgFP91oC777xupCdraiQOmM-jY-CPAjz8qfF0xebjdFTWn3njrhwW3bgaUDO66MyZtbaaBzKSgzX2SJ4EroMbgXw.jpg?r=bc8"
//                 title = "A Netflix original Series"
//                 sname = "First Love"
//                 link = "https://www.netflix.com/watch/81245964"
//             />
//         </>
//     );
// }
// export default App;

// ---Using Array in ReactJs---

// import Card from "./Card";
// import Sdata from "./Sdata";
// function App() {
//   return (
//     <>
//       <h1 className="heading">Top 3 NetFlix Series</h1>
//       <div className="container">
//         <Card
//           imgsrc={Sdata[0].imgsrc}
//           title={Sdata[0].title}
//           sname={Sdata[0].sname}
//           link={Sdata[0].link}
//         />
//         <Card
//           imgsrc={Sdata[1].imgsrc}
//           title={Sdata[1].title}
//           sname={Sdata[1].sname}
//           link={Sdata[1].link}
//         />
//         <Card
//           imgsrc={Sdata[2].imgsrc}
//           title={Sdata[2].title}
//           sname={Sdata[2].sname}
//           link={Sdata[2].link}
//         />
//         <Card
//           imgsrc={Sdata[2].imgsrc}
//           title={Sdata[2].title}
//           sname={Sdata[2].sname}
//           link={Sdata[2].link}
//         />
//         <Card
//           imgsrc={Sdata[2].imgsrc}
//           title={Sdata[2].title}
//           sname={Sdata[2].sname}
//           link={Sdata[2].link}
//         />
//       </div>
//     </>
//   );
// }
// export default App;

// ---using array map method in react---

// import Card from "./Card";
// import Sdata from "./Sdata";
// // function ncard(val) {
// //   return (
// //     <Card
// //       imgsrc={val.imgsrc}
// //       title={val.title}
// //       sname={val.sname}
// //       link={val.link}
// //     />
// //   );
// // }
// function App() {
//   return (
//     <>
//       <h1 className="heading">Top 3 NetFlix Series</h1>
//       <div className="container">
//         {Sdata.map((val) => (
//           <Card
//             key = {val.id}
//             imgsrc={val.imgsrc}
//             title={val.title}
//             sname={val.sname}
//             link={val.link}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
// export default App;

// ---if else statement in react---

// import Netflix from "./Netflix";
// import Amazon from './Amazon';

// const favSeries = 'amazon';
// // const FavS = ()=>{
// //     if(favSeries == 'netflix'){
// //         return <Netflix/>;
// //     }
// //     else {
// //         return <Amazon/>;
// //     }
// // };
// // const FavS = () => (favSeries=='netflix') ? <Netflix/> : <Amazon/>;//using ternary operator

// function App() {
//   return (
//     <>
//       <h1 className="heading">Top 3 NetFlix Series</h1>
//       <div className="container">
//         {/* <FavS/> */}
//         {favSeries=='netflix' ? <Netflix/> : <Amazon/>}
//       </div>
//     </>
//   );
// }
// export default App;

// ---Slot Machine Game---

// import SlotM from './SlotMachine';
// const App = ()=>{
//   return (
//     <>
//       <h1 className="heading">🎰 Welcome to <span>Slot Machine Game</span> 🎰</h1>
//     <div className="slot_inner">
//         <SlotM x="😄" y="😄" z="😄"/>
//         <SlotM x="😠" y="😄" z="😄"/>
//     </div>
//     </>
//   );
// }
// export default App;

// ---React Hooks---

// import React, { useState } from "react";

// const App = () => {
//   const state = useState();
//   const [count, setCount] = useState(0);
//   const IncNum = () => setCount(count+1);
//   return (
//     <>
//       <div>
//         <h1>{count}</h1>
//         <button onClick={IncNum}>Click Me</button>
//       </div>
//     </>
//   );
// };
// export default App;

// ---get time on refreshing and clicking on button ---

// import React, { useState } from "react";
// const App = () =>{
//     let curr = new Date().toLocaleTimeString();
//     const [time,setTime] = useState(curr);
//     const Refresh = () =>{
//         curr = new Date().toLocaleTimeString();
//         setTime(curr);
//     }
//     return (
//         <>
//             <div>
//                 <h1>{time}</h1>
//                 <button onClick = {Refresh}>Get Time</button>
//             </div>
//         </>
//     );
// }
// export default App;

// ---creating a digital Clock---

// import React, { useState } from "react";
// const App = () =>{
//     let time = new Date().toLocaleTimeString();
//     const [currtime,setTime] = useState(time);
//     const Refresh = () =>{
//         time = new Date().toLocaleTimeString();
//         setTime(time);
//     }
//     setInterval(Refresh,1000);
//     return (
//         <>
//             <div>
//                 <h1>{currtime}</h1>
//             </div>
//         </>
//     );
// }
// export default App;

// ---handling events in react---

// import React, { useState } from "react";

// const App = () => {
//     const state = useState();
//     const purple = 'darkorchid';
//     const prevWord = 'Click Me';
//     const [currBg,setcurrBg] = useState(purple);
//     const [word,setWord] = useState(prevWord);
//     const BgChange1 = () =>{
//         setcurrBg('green');
//         setWord('Waah 😃');
//     }
//     const BgChange2 = () =>{
//         setcurrBg(purple);
//         setWord('WTF 😃');
//     }
//     return (
//         <>
//             <div style={{backgroundColor : currBg}}>
//                 <button onClick={BgChange1} onDoubleClick={BgChange2}>{word}</button>
//             </div>
//         </>
//     );
// }
// export default App;

// ---ReactJs Forms ---

// import React, { useState } from "react";

// const App = () => {
//   const state = useState();
//   const [name, setName] = useState();
//   const [fullName,setFullName] = useState();
//   const InputEvent = (event) => {
//     // console.log(event.target.value);
//     setName(event.target.value);
//   };
//   const ClickEvent = (event) => {
//     event.preventDefault();//to prevent refreshing of page
//     setFullName(name);
//   };
//   return (
//     <>
//       <div >
//         <form onSubmit={ClickEvent}>
//           <div className="main_div">
//             <h1>Hello {fullName}</h1>
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               onChange={InputEvent}
//               value={name}
//             />
//             <button>Submit</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// ----login form submit ----

// import React, { useState } from "react";

// const App = () => {
//   const state = useState();
//   const [name, setName] = useState();
//   const [fullName,setFullName] = useState();
//   const [pass,setPass] = useState();
//   const [fullPass,setFullPass] = useState();
//   const InputName = (event) => {
//     setName(event.target.value);
//   };
//   const InputPass=(event)=>{
//     setPass(event.target.value);
//   }
//   const ClickEvent = (event) => {
//     event.preventDefault();//to prevent refreshing of page
//     setFullName(name);
//     setFullPass(pass);
//   };
//   return (
//     <>
//       <div >
//         <form onSubmit={ClickEvent}>
//           <div className="main_div">
//             <h1>Hello {fullName} {fullPass}</h1>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               onChange={InputName}
//               value={name}
//             />
//             <input
//               type="password"
//               placeholder="Enter Password"
//               onChange={InputPass}
//               value={pass}
//             />
//             <button>Submit</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// ----handling complex multiple input ---

// import React, { useState } from "react";

// const App = () => {

//   const [fullName, setfullName] = useState({
//     fname : '',
//     lname : '',
//     email : '',
//     mobile : '',
//   });

//   const InputEvent = (event) => {
//     // console.log(event.target.value);
//     // console.log(event.target.name);
//     // const value = event.target.value;
//     // const name = event.target.name;
//     const {value,name} = event.target;

//     setfullName((prevValue)=>{
//       if(name === 'fName')
//       return {
//         fname : value,
//         lname : prevValue.lname,
//         email : prevValue.email,
//         mobile : prevValue.mobile,
//       }
//       else if(name === 'lName')
//       return {
//         fname : prevValue.fname,
//         lname : value,
//         email : prevValue.email,
//         mobile : prevValue.mobile,
//       }
//       else if(name === 'eMail')
//       return {
//         fname : prevValue.fname,
//         lname : prevValue.lname,
//         email : value,
//         mobile : prevValue.mobile,
//       }
//       else if(name === 'mobileN')
//       return {
//         fname : prevValue.fname,
//         lname : prevValue.lname,
//         email : prevValue.email,
//         mobile : value,
//       }

//     })
//   };
//   const ClickEvent = (event) => {
//     event.preventDefault();//to prevent refreshing of page
//     alert('form submitted');
//   };
//   return (
//     <>
//       <div >
//         <form onSubmit={ClickEvent}>
//           <div className="main_div">
//             <h1>Hello {fullName.fname} {fullName.lname}</h1>
//             <h2>{fullName.email}</h2>
//             <h2>{fullName.mobile}</h2>
//             <input
//               type="text"
//               placeholder="Enter Your First Name"
//               name="fName"
//               onChange={InputEvent}
//               value={fullName.fname}
//             />
//             <input
//               type="text"
//               placeholder="Enter Your Last Name"
//               name="lName"
//               onChange={InputEvent}
//               value={fullName.lname}
//             />
//             <input
//               type="email"
//               placeholder="Enter Your Email Id"
//               name="eMail"
//               onChange={InputEvent}
//               value={fullName.email}
//             />
//             <input
//               type="number"
//               placeholder="Enter Your Last Name"
//               name="mobileN"
//               onChange={InputEvent}
//               value={fullName.mobile}
//             />
//             <button>Submit</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// ---rewriting the code using spread operator---

// import React, { useState } from "react";
// const App = () => {
//   const [fullName, setfullName] = useState({fname : '',lname : '',email : '',mobile : '',});
//   const InputEvent = (event) => {
//     const {value,name} = event.target;
//     setfullName((prevValue)=>{
//       return{
//         ...prevValue,
//         [name] : value
//       }
//     })
//   };
//   const ClickEvent = (event) => {
//     event.preventDefault();//to prevent refreshing of page
//     alert('form submitted');
//   };
//   return (
//     <>
//       <div >
//         <form onSubmit={ClickEvent}>
//           <div className="main_div">
//             <h1>Hello {fullName.fname} {fullName.lname}</h1>
//             <h2>{fullName.email}</h2>
//             <h2>{fullName.mobile}</h2>
//             <input
//               type="text"
//               placeholder="Enter Your First Name"
//               name="fname"
//               onChange={InputEvent}
//               value={fullName.fname}
//             />
//             <input
//               type="text"
//               placeholder="Enter Your Last Name"
//               name="lname"
//               onChange={InputEvent}
//               value={fullName.lname}
//             />
//             <input
//               type="email"
//               placeholder="Enter Your Email Id"
//               name="email"
//               onChange={InputEvent}
//               value={fullName.email}
//             />
//             <input
//               type="number"
//               placeholder="Enter Your Mobile Number"
//               name="mobile"
//               onChange={InputEvent}
//               value={fullName.mobile}
//             />
//             <button>Submit</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };
// export default App;

// ---building a todo list---

// import React, { useState } from "react";
// import ToDoList from "./ToDoList";
// const App = () =>{
//   const [task,setTask] = useState('');
//   const [items,setItems] = useState([]);
//   const InputEvent = (event) =>{
//     setTask(event.target.value);
//   }
//   const AddEvent = () =>{
//     setItems((prevValue)=>{
//       return [...prevValue,task];
//     });
//     setTask("");
//   }
//   const deleteItem=(id)=>{
//     setItems((prevValue)=>{
//       return prevValue.filter((arrElem,index)=>{
//         return index !==id ;
//       })
//     });
//   }
//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br/>
//           <h1>ToDo List</h1>
//           <br/>
//           <input type="text" placeholder="Add a Item" value={task} onChange={InputEvent}/>
//           <button className="addBtn" onClick={AddEvent}> + </button>
//           <ol>
//             {items.map((itemVal,index)=>{
//               return <ToDoList
//               key = {index}
//               id = {index}
//               text = {itemVal}
//               onSelect = {deleteItem}
//               />
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };
// export default App;

// ---increamenting and decrementing the state variable---

// import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// const App = () => {
//   const [data,setData] = useState(0);
//   const IncEvent=()=>{
//     setData(data+1);
//   }
//   const DecEvent=()=>{
//     if(data===0)
//     {
//       alert("zero value can't be decremented");
//     }
//     else setData(data-1);
//   }
//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//             <h1>{data}</h1>
//             <br/>
//             <div className="buttons">
//             <Tooltip title="Add">
//             <Button onClick={IncEvent} className="btn_green" >
//             <AddIcon/>
//             </Button>
//             </Tooltip>
//             <Tooltip title="Delete">
//             <Button onClick={DecEvent} className="btn_red">
//             <DeleteIcon/>
//             </Button>
//             </Tooltip>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;

// ---using npm to create a digital clock ---

// import React from "react";
// import Clock from 'react-digital-clock';
// const App = () =>{
//   return <Clock/>;
// }
// export default App;

// ---modifying the todo list using material ui icons ---

// import React, { useState } from "react";
// import ToDoList from "./ToDoList";
// import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
// const App = () =>{
//   const [task,setTask] = useState('');
//   const [items,setItems] = useState([]);
//   const InputEvent = (event) =>{
//     setTask(event.target.value);
//   }
//   const AddEvent = () =>{
//     setItems((prevValue)=>{
//       return [...prevValue,task];
//     });
//     setTask("");
//   }
//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br/>
//           <h1>ToDo List</h1>
//           <br/>
//           <input type="text" placeholder="Add a Item" value={task} onChange={InputEvent}/>
//           <Fab style={{color:'white',marginLeft:'20px',backgroundColor:'#8566aa'}}aria-label="add" onClick={AddEvent}><AddIcon/></Fab>
//           <ol>
//             {items.map((itemVal,index)=>{
//               return <ToDoList
//               key = {index}
//               id = {index}
//               text = {itemVal}
//               />
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };
// export default App;

// ---adding bootstrap into react---

// import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// const App = () =>{
//   return (
//     <>
//       <h1 class="text-uppercase text-danger text-center mt-5">Subrata Biswas</h1>
//     </>
//   );
// };
// export default App;

// ---making a google keep clone app ---

// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import CreateNote from "./CreateNote";
// import Note from "./Note";
// const App = () => {
//   const [items,setItems] = useState([]);
//   const AddEvent=(note)=>{
//     setItems((prevValue)=>{
//       console.log(note.title);
//       console.log(note.desc);
//       return [...prevValue,note];
//     });
//   };
//   const onDelete=(id)=>{
//     setItems((prevVal)=>
//     prevVal.filter((currData,indx)=>{
//       return indx !== id;
//     }));
//   };
//   return (
//     <>
//       <Header />
//       <CreateNote passNote={AddEvent}/>
//       <div className="note_div">
//         {items.map((itemVal,index)=>{
//           return (<Note
//             key={index}
//             id={index}
//             title={itemVal.title}
//             desc={itemVal.desc}
//             deleteNote={onDelete}
//           />);
//         })}
//       </div>
//       <Footer />
//     </>
//   );
// };
// export default App;

// ---context API in react js---

// import React, { createContext } from "react";
// import ComA from "./Components/ComA";
// const FirstName = createContext();
// const LastName = createContext();
// const App = () =>{
//   return (
//     <>
//     <FirstName.Provider value={"Subrata"}>
//     <LastName.Provider value={"Biswas"}>
//       <ComA/>
//     </LastName.Provider>
//     </FirstName.Provider>
//     </>
//   );
// };
// export default App;
// export {FirstName,LastName};

// ---useEffect Hook ---

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const App = () =>{
//   const [num,setNum] = useState(0);
//   const [nums,setNums] = useState(0);
//   // ---both---
//   // useEffect(()=>{
//   //   alert('I am clicked');
//   // });
//   //---only at reload---
//   // useEffect(()=>{
//   //   alert('I am clicked');
//   // },[]);
//   //--only for first button---
//   useEffect(()=>{
//     alert('I am clicked');
//   },[num]);

//   return (
//     <>
//       <button onClick={()=>setNum(num+1)}>
//         click me {num}
//       </button>
//       <br/>
//       <button onClick={()=>setNums(nums+1)}>
//         click me {nums}
//       </button>
//     </>
//   );
// };
// export default App;

// ---React hook challenge---

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const App = () =>{
//   const [num,setNum] = useState(0);
//   useEffect(()=>{
//     document.title = `you clicked me ${num} times`;
//   });
//   return (
//     <>
//       <button onClick={()=>setNum(num+1)}>
//         click me {num}
//       </button>
//     </>
//   );
// };
// export default App;

// ---React API Call to Get Pokemon JSON Data using Axios and useEffect----

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const App = () => {
//   const [num, setNum] = useState();
//   const [name, setName] = useState();
//   const [moves, setMoves] = useState();
//   useEffect(() => {
//     const getData = async () => {
//       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
//       console.log(res.data.name);
//       setName(res.data.name);
//       setMoves(res.data.moves.length);
//     };
//     getData();
//   });
//   return (
//     <>
//       <h1 style={{ fontSize: "80px" }}>
//         you choose <span style={{ color: "red" }}>{num}</span> value
//       </h1>
//       <h1 style={{ fontSize: "80px" }}>
//         my name is <span style={{ color: "red" }}>{name}</span>{" "}
//       </h1>
//       <h1 style={{ fontSize: "80px" }}>
//         i have <span style={{ color: "red" }}>{moves} </span>moves
//       </h1>
//       <select
//         style={{ fontSize: "50px" }}
//         value={num}
//         onChange={(event) => {
//           setNum(event.target.value);
//         }}
//       >
//         <option value="1"> 1 </option>
//         <option value="10"> 10 </option>
//         <option value="25"> 25 </option>
//         <option value="9"> 9 </option>
//         <option value="4"> 4 </option>
//       </select>
//     </>
//   );
// };
// export default App;

// ---React Router---

// import React from "react";
// import {Route,Routes} from 'react-router-dom';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Error from './Components/Error';

// const App=()=>{
//   const Name=()=>{
//     return <h1>This is name page</h1>
//   }
//   return (
//     <>
//       <Routes>
//         <Route exact path="/" element={<About/>}/>
//         <Route exact path="/contact" element={<Contact/>}/>
//         <Route exact path="/contact/Name" element={<Name/>}/>
//         <Route element={<Error/>}/>
//       </Routes>
//     </>
//   );
// }
// export default App;

// ---creating react navbar using router---

// import React from "react";
// import {Route,Routes,Navigate} from 'react-router-dom';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Error from './Components/Error';
// import Menu from './Components/Menu';
// import Service from './Components/Service';
// import User from './Components/User';
// import Search from './Components/Search';
// const App=()=>{
//   const Name=()=>{
//     return <h1>This is name page</h1>
    
//   }
//   return (
//     <>
//     <Menu/>
//       <Routes>
//         <Route 
//         exact path="/" 
//         Component={()=><About name="About"/>}/>
//         <Route 
//         exact path="/service" 
//         Component={()=><Service name="Service"/>}/>
//         <Route exact path="/contact" Component={Contact}/>
//         <Route exact path="/contact/Name" Component={Name}/>
//         <Route path="/user/:fname/:lname" Component={User}/>
//         <Route exact path="/search" Component={Search}/>
//         <Route Component={Error}/>{/*throw a error page*/}
//         <Route path="*" element={<Navigate to='/'/>}/>{/*redirects the page to home page for any given link after main */}
//       </Routes>
//     </>
//   );
// }
// export default App;

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}
export default App