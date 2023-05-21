// ---------------components--------------

// import React from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Main from "./Components/Main";

// const App = () => {
//   return (
//     <>
//       <Header></Header>
//       <Main></Main>
//       <Footer></Footer>
//     </>
//   );
// };

// export default App;

// ------------------practice problem 4-----------------

// import React from "react";
// import Favourite,{name1,subject,myFunction} from "./Components/ImportExport";

// const App = () => {

//   return (
//     <>
//       <h1>practice problem 4</h1>
//       <Favourite/>
//       <h1>{`my name is ${name1} and i'm learning ${subject}`}</h1>
//       <h1>{myFunction("binary","turnary")}</h1>

//     </>
//   );

// };

// export default App;

// -------------------import bootstrap----------------------------

// import React from "react";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const App=()=>{
//   return (
//     <>
//       <div classNameName="container container-fluid">
//         <form>
//           <div classNameName="mb-3">
//             <label for="exampleInputEmail1" classNameName="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               classNameName="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" classNameName="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>
//           <div classNameName="mb-3">
//             <label for="exampleInputPassword1" classNameName="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               classNameName="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div classNameName="mb-3 form-check">
//             <input
//               type="checkbox"
//               classNameName="form-check-input"
//               id="exampleCheck1"
//             />
//             <label classNameName="form-check-label" for="exampleCheck1">
//               Check me out
//             </label>
//           </div>
//           <button type="submit" classNameName="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default App;

// --------------------practice project 5-------------

// import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const App = ()=>{
//   return (
//     <>
//       <h1 className="text-center text-success">Bootstrap cards</h1>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3">
//             <div class="card">
//               <img src="..." className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">Flower 1</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="card">
//               <img src="..." className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">Flower 2</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="card">
//               <img src="..." className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">Flower 3</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="card">
//               <img src="..." className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">Flower 4</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

//  ---------------project 1--------------------

// import React from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Main from "./Components/Main";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const App=()=>{
//     return(
//         <>
//          <Header/>
//          <Main/>
//          <Footer/>

//         </>
//     )
// }

// export default App;

// ----------------props--------------------

// import React from "react";
// import Props from "./Components/Props";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Data from "./Components/Data";

// const App = () => {
//   return (
//     <>
//       <div className="container my-5">
//         <div className="row">
//           <Props
//             imgsrc={Data[0].imgsrc}
//             title={Data[0].title}
//             btn={Data[0].btn}
//           />
//           <Props
//             imgsrc={Data[1].imgsrc}
//             title={Data[1].title}
//             btn={Data[1].btn}
//           />
//           <Props
//             imgsrc={Data[2].imgsrc}
//             title={Data[2].title}
//             btn={Data[2].btn}
//           />
//           <Props
//             imgsrc={Data[3].imgsrc}
//             title={Data[3].title}
//             btn={Data[3].btn}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;





// ----------------mappping----------------

// import React from "react";
// import Props from "./Components/Props";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Data from "./Components/Data";

// const App = () => {
//   return (
//     <>
//       <div className="container my-5">
//         <div className="row">
          

//           {Data.map((values)=>{
//             return (
//               <>
//                 <Props
//                   imgsrc={values.imgsrc}
//                   title={values.title}
//                   btn={values.btn}
//                 />
//               </>
//             );
//           })}
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;



// ------------------project 2---------------------------

// import React from "react";
// import './index.css';
// // import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Hotel from "./Components/Hotel";
// import HotelData from "./Components/HotelData";

// const App = () => {
//   return (
//     <>
//       <div className="container">
//         <h1 className="heading">Astronunts</h1>

//         <div className="hotelCards">
//           {HotelData.map((values) => {
//             return (
//               <>
//                 <Hotel
//                   imgsrc={values.imgsrc}
//                   title={values.title}
//                   text={values.text}
//                   btnText={values.btnText}
//                 />
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;


// -----------------hooks------------------

// import React,{useState} from "react";

// const App = () => {

//   const[mynames,setmynames]=useState('Khanam');


//   return (
//     <>

    
//       <div className="container my-5">
//         <h1>{mynames}</h1>
//         <button className="btn btn-success" onClick={()=>{
//           setmynames('Riya')
//         }}>Click Me</button>
//       </div>

          
       
        
//     </>
//   );
// };

// export default App;


//------------------project 3---------------------


// import React, { useState } from "react";

// const App = () => {
  
//   const [numbers,setnumbers]=useState(0);
//   const increment=()=>{
//     setnumbers(numbers+1);
//   }

//   return (
//     <>
//       <div className="container my-5">
//         <div className="text-center">
//           <h1>{numbers}</h1>
//           <button className="btn btn-warning btn-lg" onClick={increment}>Click Me</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;


// ------------5 projects video----------------

//----------------1st froject-------------------


// import React, { useState } from "react";

// let bgcolorbg = "orange";
// let data = "Anjana Nanayakkar";
// let colorsText = "red";

// const App = () => {

//   const [bgcolor,setbgcolor] = useState(bgcolorbg);
//   const [text, settext] = useState(data);
//   const [colors, setcolors] = useState(colorsText);
  
//   const change=()=>{
//     setbgcolor('cyan');
//     settext('hail anajan');
//     setcolors('gray');

//   }

//   const normal=()=>{
//      setbgcolor(bgcolorbg);
//      settext(data);
//      setcolors(colorsText);
//   }
 

//   return (
//     <>
//       <div style={{ backgroundColor: bgcolor, color: colors }}>
//         <h1 className="text-center">{text}</h1>
//       </div>

//       <button className="btn btn-dark" onClick={change} onDoubleClick={normal}>
//         Click Me
//       </button>
//     </>
//   );
// };

// export default App;


// -------------------project 1 modified by me---------------

// import React, { useState } from "react";


// let bgcolor="black";
// let textColor="white";
// let text="dark mode";
// let btnText="click me";

// const App = () => {

//   const [bgCol,setbgCol] = useState(bgcolor);
//   const [textCol, settextCol] = useState(textColor);
//   const [tex, settex] = useState(text);
//   const [bttex, setbttex] = useState(btnText);

//   const lightMode=()=>{
//     setbgCol('white');
//     settextCol("black");
//     settex("light Mode");
//     setbttex("double click me");

//   }

//   const darkMode = () => {
//     setbgCol(bgcolor);
//     settextCol(textColor);
//     settex(text);
//     setbttex(btnText);
//   }

//   return (
//     <>
//       <div style={{ backgroundColor: bgCol, color: textCol }}>
//         <h1 className="text-center">{tex}</h1>
//       </div>
//       <div className="btn btn-dark" onClick={lightMode} onDoubleClick={darkMode}>{bttex}</div>
//     </>
//   );

// }


// export default App;


//----------------2nd project-------------------

// import React,{useState} from "react";



// const App=()=>{

//   const [textData,setTextData]=useState("")
//   const [preData,setPreData]=useState("");

//   const clearData=()=>{
//     setTextData("");
//   }

//   const handleData = () => {
//     setTextData(e.target.value);
//   };

//   const previewData = () => {
//     setPreData(textData);
//   };

//   return(
//     <>
//       <div className="container my-5">
//         <textarea cols="30" rows="10" class="w-100" onChange={handleData} value={{textData}}>{textData}</textarea>
//         <button className="btn btn-dark" onClick={clearData}>Clear Data</button>
//         <p>{preData}</p>
//         <button className="btn btn-success" onClick={previewData}>Preview Data</button>
//       </div>
    
//     </>
//   )
// }

// export default App;



// -------------------handleing arrays on hooks--------------------


// import React,{useState} from "react";



// const App=()=>{

//  const Data = [
//    {
//      name: "anjana",
//      place: "matara",
//    },
//    {
//      name: "kamal",
//      place: "gampaha",
//    },
//    {
//      name: "ranil",
//      place: "colombo",
//    },
//  ]

// const [text,setText]=useState(Data);

//  const updateData=()=>{
//   setText([
//    {
//      name: "mahinda",
//      place: "matara",
//    },
//    {
//      name: "gotabaya",
//      place: "gampaha",
//    },
//    {
//      name: "anura",
//      place: "colombo",
//    },
//  ])
//  }



//  return(
//   <>
//     {Data.map((values)=>{
//       return(
//         <>
//         <h2>{values.name}</h2>
        
//         </>
//       )
//     })}
  
//   </>
//  )



// }
// export default App;

// import React, { useState } from "react";


// const App=()=>{

//   // const [text,setText]=useState(999)

//    const Data = [
//      {
//        name: "anjana",
//        place: "matara",
//      },
//      {
//        name: "kamal",
//        place: "gampaha",
//      },
//      {
//        name: "ranil",
//        place: "colombo",
//      },
//    ]

//    const[text,setText]=useState(Data);

// const updateData=()=>{
//   setText([
//    {
//      name: "mahinda",
//      place: "matara",
//    },
//    {
//      name: "gotabaya",
//      place: "gampaha",
//    },
//    {
//      name: "anura",
//      place: "colombo",
//    },
//  ])
// }

//   return (
//     <>
//       <h1>{text}</h1>

//       {text.map((values) => {
//         return (
//           <>
//             <h1>{values.name}</h1>
//           </>
//         );
//       })}
//       <button onClick={updateData}>Click me</button>
//     </>
//   );
// }

// export default App;



// ---------------react forms and hooks------------------

// import React, { useState } from 'react'
// import'./index.css'

// const App = () => {

//   const [myname,setMyname]=useState("");
//   const [mobile,setMobile]=useState("");
//   const [newEntry,setNewentry]=useState([]);

//   const myData=(e)=>{
//     setMyname(e.target.value);
//   }

//   const submitData=(e)=>{
//     e.preventDefault();
//     const newData={myname:myname,mobile:mobile};
//     setNewentry([...newEntry,newData]);
//     setMyname("");
//     setMobile("");

//   }
//   return (
//     <>
//       <div className="container my-5 text-center">
//         <form onSubmit={submitData}>

//           <div>
//             <input type="text" placeholder="Enter your name" className="w-50 my-3 py-1" value={myname} onChange={myData}/>
//           </div>

//           <div>
//             <input type="text" placeholder="Enter your name" className="w-50 my-3 py-1" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
//           </div>
//           <button className='btn btn-dark' type="submit">Submit</button>
//         </form>
//         <div className='my-3'>
//           {newEntry.map((values)=>{
//             return (
//               <>
//                 <h2>{values.myname}</h2>
//                 <h2>{values.mobile}</h2>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App



// ------------------forms with validation-----------------------

// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//   const [myname, setMyname] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [newEntry, setNewentry] = useState([]);

//   const myData = (e) => {
//     setMyname(e.target.value);
//   };

//   const submitData = (e) => {
//     e.preventDefault();
//     // const time=newDate
//     if(myname && mobile && email && password){
//       const newData = { myname,mobile,email,password};
//       setNewentry([...newEntry, newData]);
//       setMyname("");
//       setMobile("");
//       setEmail("");
//       setPassword("");
//     }else{
//       alert("please fill data")
//     }
//   }
//   return (
//     <>
//       <div className="container my-5 text-center">
//         <form onSubmit={submitData}>
//           <div>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-50 my-3 py-1"
//               value={myname}
//               onChange={myData}
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Enter your mobile"
//               className="w-50 my-3 py-1"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Enter your email"
//               className="w-50 my-3 py-1"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Enter your password"
//               className="w-50 my-3 py-1"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button className="btn btn-dark" type="submit">
//             Submit
//           </button>
//         </form>
//         <div className="my-3">
//           {newEntry.map((values) => {
//             return (
//               <>
//                 <h2>My name is {values.myname}</h2>
//                 <h2>My mobile no is {values.mobile}</h2>
//                 <h2>My email is {values.email}</h2>
//                 <h2>My password is {values.password}</h2>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;



// ------------------more validation-----------------------

// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//   // const [myname, setMyname] = useState("");
//   // const [mobile, setMobile] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [newEntry, setNewentry] = useState({
//     myname:"",
//     email:"",
//     mobile:"",
//     password:""
//   });


//   const inputdata=(e)=>{
//     e.preventDefault();
//     const name=e.target.name;
//     const value=e.target.value;
//     setNewentry((previousData)=>{
//       if (name == "myname") {
//         return {
//           myname: value,
//           mobile: previousData.mobile,
//           email: previousData.email,
//           password: previousData.password,
//         };
//       } else if (name == "email") {
//         return {
//           myname: previousData.name,
//           mobile: previousData.mobile,
//           email: value,
//           password: previousData.password,
//         };
//       } else if (name == "password") {
//         return {
//           myname: previousData.name,
//           mobile: previousData.mobile,
//           email: previousData.email,
//           password: value,
//         };
//       } else if (name == "mobile") {
//         return {
//           myname: previousData.name,
//           mobile: value,
//           email: previousData.email,
//           password: previousData.password,
//         };
//       }
//     })
//   }
//   // const myData = (e) => {
//   //   setMyname(e.target.value);
//   // };

//   // const submitData = (e) => {
//   //   e.preventDefault();
//   //   // const time=newDate
//   //   if(myname && mobile && email && password){
//   //     const newData = { myname,mobile,email,password};
//   //     setNewentry([...newEntry, newData]);
//   //     setMyname("");
//   //     setMobile("");
//   //     setEmail("");
//   //     setPassword("");
//   //   }else{
//   //     alert("please fill data")
//   //   }
//   // }
//   return (
//     <>
//       <div className="container my-5 text-center">
//         <form>
//           <div>
//             <input
//               name="myname"
//               type="text"
//               placeholder="Enter your name"
//               className="w-50 my-3 py-1"
//               value={newEntry.myname}
//               onChange={inputdata}
//             />
//           </div>

//           <div>
//             <input
//               name="mobile"
//               type="text"
//               placeholder="Enter your mobile"
//               className="w-50 my-3 py-1"
//               value={newEntry.mobile}
//               onChange={inputdata}
//             />
//           </div>

//           <div>
//             <input
//               name="email"
//               type="text"
//               placeholder="Enter your email"
//               className="w-50 my-3 py-1"
//               value={newEntry.email}
//               onChange={inputdata}
//             />
//           </div>

//           <div>
//             <input
//               name="password"
//               type="text"
//               placeholder="Enter your password"
//               className="w-50 my-3 py-1"
//               value={newEntry.password}
//               onChange={inputdata}
//             />
//           </div>
//           <button className="btn btn-dark" type="submit">
//             Submit
//           </button>
//         </form>

//         <h2>{newEntry.myname}</h2>
//         <h2>{newEntry.mobile}</h2>
//         <h2>{newEntry.email}</h2>
//         <h2>{newEntry.password}</h2>
//         {/* <div className="my-3">
//           {newEntry.map((values) => {
//             return (
//               <>
//                 <h2>My name is {values.myname}</h2>
//                 <h2>My mobile no is {values.mobile}</h2>
//                 <h2>My email is {values.email}</h2>
//                 <h2>My password is {values.password}</h2>
//               </>
//             );
//           })}
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default App;



// -------------reduce code-------------


// import React, { useState } from "react";
// import "./index.css";

// const App = () => {

//   const [newEntry, setNewentry] = useState({
//     myname: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const inputdata = (e) => {
//     e.preventDefault();
//     const name = e.target.name;
//     const value = e.target.value;
//     setNewentry((previousData) => {
//       return {
//         ...previousData,
//         [name]: value,
//       };
//     });
//   };

//   return (
//     <>
//       <div className="container my-5 text-center">
//         <form>
//           <div>
//             <input
//               name="myname"
//               type="text"
//               placeholder="Enter your name"
//               className="w-50 my-3 py-1"
//               value={newEntry.myname}
//               onChange={inputdata}
//             />
//           </div>

//           <div>
//             <input
//               name="mobile"
//               type="text"
//               placeholder="Enter your mobile"
//               className="w-50 my-3 py-1"
//               value={newEntry.mobile}
//               onChange={inputdata}
//             />
//           </div>

//           <div>
//             <input
//               name="email"
//               type="text"
//               placeholder="Enter your email"
//               className="w-50 my-3 py-1"
//               value={newEntry.email}
//               onChange={inputdata}
//             />
//           </div>

//           <div>
//             <input
//               name="password"
//               type="text"
//               placeholder="Enter your password"
//               className="w-50 my-3 py-1"
//               value={newEntry.password}
//               onChange={inputdata}
//             />
//           </div>
//           <button className="btn btn-dark" type="submit">
//             Submit
//           </button>
//         </form>

//         <h2>{newEntry.myname}</h2>
//         <h2>{newEntry.mobile}</h2>
//         <h2>{newEntry.email}</h2>
//         <h2>{newEntry.password}</h2>
        
//       </div>
//     </>
//   );
// };

// export default App;



// -----------------why we use contex API -------------------


// import React from 'react'
// import A from './Components/A'


// const App = () => {
//   return (
//     <>
//     <h1>parent compenent</h1>
//     <A myname="Anjana"></A>
    
    
//     </>
//   )
// }

// export default App;

// ---------------context api-----------------

// import React from "react";
// import C from "./Components/C";
// import B from "./Components/B";

// const App = () => {
//   return (
//     <>
//       <h1>parent compenent</h1>
//       <C/>
//       {/* <B/> */}
//     </>
//   );
// };

// export default App;


// -----------------use effect hook------------------

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data,setData]=useState("Good morning");
//   const changeData=(()=>{
//     setData("Good evening")
//   })

//   useEffect(()=>{
//     console.log(" in console");
//   })


//   return (
//     <>
//       <h1>{data}</h1>
//       <button className="btn btn-dark" onClick={changeData}>Click me</button>
//     </>
//   );
// };

// export default App;



// --------------------project-----------------

// import React,{useState} from 'react'
// import Friends from './Components/Friends';

// const Data = [
//   {
//     id: 1,
//     name: "khanam",
//   },
//   {
//     id: 2,
//     name: "seema",
//   },
//   {
//     id: 3,
//     name: "rohi",
//   },
//   {
//     id: 4,
//     name: "www",
//   },
//   {
//     id: 5,
//     name: "mahio",
//   },
// ];


// const App = () => {
//   const [friend,setFriend]=useState(Data);
//   return (
//     <>
//       <h1>Number of friends : {friend.length}</h1>

//       <Friends friends={friend}/>
//       <button onClick={()=>setFriend([])} className='btn btn-dark mx-3'>clear all</button>
//       <button onClick={()=>setFriend(Data)} className='btn btn-dark mx-3'>get all</button>
//     </>
//   );
// }

// export default App



// --------------useefect project---------------

// import React,{useEffect,useState} from 'react'

// const App = () => {
//   const [number,setNumber]=useState(0);
//   useEffect(()=>{
//     document.title=`u have ${number} messages`;
//   })
//   return (
//     <>
//     <h1>number of masseges {number}</h1>
//     <button className='btn btn-dark mx-3' onClick={()=>setNumber(number+1)}>click me</button>
    
//     </>
//   )
// }

// export default App


// ---------fetching apis-----------

// import React,{useEffect,useState} from 'react'

// const App = () => {

//   const[fake,setFake]=useState([]);
//   console.log(fake)
//   useEffect(()=>{
//     const fakestore = async () => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       // console.log(response);
//       const jsonData = await response.json();
//       // console.log(jsonData);
//       setFake(jsonData);
//     };
//     fakestore();
//   },[])

  // const fakestore=async()=>{
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   console.log(response)
  //   const jsonData=await response.json();
  //   console.log(jsonData)
  //   setFake(jsonData)
  // }

  // fakestore();
//   return (
//     // https://fakestoreapi.com/products
//     <>
//     <h2>Fake api store</h2>
//     <div className='container'>
//       {fake.map((values)=>{
//         return (
//           <>
//             <div className="box">
//               <div className="content">
//                 <h5>{values.title}</h5>
//                 <p>{values.description}</p>
//               </div>
//               <img src={values.image} style={width:300px,height:300px} />
//               {/* <img src='' alt=''/> */}
//             </div>
//           </>
//         );
//       })}
      
//     </div>
//     </>
//   )
// }

// export default App

// -------------------react routers---------------

// import React from 'react'
// import { Link,Routes,Route } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'


// const App = () => {
//   return (
//     <>
      // <ul>
      //   <Link to="/">
      //     <li>Home</li>
      //   </Link>
      //   <Link to="/about">
      //     <li>About</li>
      //   </Link>
      // </ul>
//       <Routes>
//         <Route exact path="/" Component={Home}></Route>
//         <Route exact path="/about" Component={About}></Route>
//       </Routes>
//     </>
//   );
// }

// export default App

// ------------------routing navbar-----------------


import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <div>
        <Navbar>
          <Routes>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/services" component={Services}></Route>
          </Routes>
        </Navbar>
      </div>
    </>
  );
};

export default App;

