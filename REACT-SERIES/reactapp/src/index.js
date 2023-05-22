
// --------------jsx element  and fragmentation-------------


// var React = require('react');
// var ReactDOM = require('react-dom');

// import React from "react";
// import ReactDOM from 'react-dom';

// ReactDOM.render(
  // without wrapper it shows error
  //   <h1>Hello world</h1>
  //   <h1>Hello world</h1>

  //   <div>
  //     <h1>Hello world</h1>
  //     <h2>Hello world</h2>
  //   </div>

  //   <>
  //     <h1>Hello world</h1>
  //     <h2>Hello world</h2>
  //   </>

//   <React.Fragment>
//     <h1>Hello world</h1>
//     <h2>Hello world</h2>
//   </React.Fragment>,

//   document.getElementById("root")
// );





// --------------------jsx exercise------------------



// import React from "react";
// import ReactDOM from 'react-dom';


// let fname = "anjana";
// let color = "black";

// ReactDOM.render(
//   <>
    /* <h1>hellow there</h1>
    <p>genaral kenobi</p>

    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ol> */

    
//   </>,

//   document.getElementById("root")
// );




// ------------------jsx expression-----------------


// import React from "react";
// import ReactDOM from 'react-dom';


// let fname = "anjana";
// let color = "black";

// ReactDOM.render(
//   <>
   

//     <h1>hellow my name is {fname} and my fav colour is {color}.</h1>

//     <p>{Math.floor(Math.random()*100)}</p>

//     <p>{7*5}</p>

//     <p>7*5</p>

    /* {we cannot use any conditional statements like if while do inside our
    jsx elements....} */

    /* not working */
    /* <h1>{
        if(1){
            alert(1);
        }else{
            alert(2);
        }
    }</h1> */

  /* </>,

  document.getElementById("root")
); */



// -----------------jsx exercise 2------------


// import React from "react";
// import ReactDOM from "react-dom";

// let fname = "anjana";
// let place = "matara";
// let image =
//   "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbilder&psig=AOvVaw1aHpvuGH6O40eRtqZ6uOeX&ust=1684489059730000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNi3__HI_v4CFQAAAAAdAAAAABAE";

// let time = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
    // <h1>
    //   my name is {fname} and im from {place}.
    // </h1>

    // <img
    //   src={image}
    //   alt="random"
    // />

    // <p>{Math.random()}</p>

    // <p>{time}</p>
//   </>,

//   document.getElementById("root")
// );


// -----------------template literales------------------


// import React from "react";
// import ReactDOM from "react-dom";

// let fname = "anjana";
// let place = "matara";
// let image =
//   "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbilder&psig=AOvVaw1aHpvuGH6O40eRtqZ6uOeX&ust=1684489059730000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNi3__HI_v4CFQAAAAAdAAAAABAE";

// let time = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
    // <h1>
    //   {`my name is ${fname} and im from ${place}.`}
    // </h1>

    // <img src={image} alt="random" />

    // <p>{Math.random()}</p>

    // <p>{time}</p>
//  </>, 

//   document.getElementById("root")
// );




// -------------css inline internal import styling-------------




// import React from "react";
// import ReactDOM from "react-dom";

// importing css file
// import './index.css'

// let title={
//     backgroundColor : 'blue',
//     color : 'pink'
// }

// ReactDOM.render(
//   <>

//   {/* internal */}
    // <h1 style={title}>internal styling</h1>

    // {/* inline */}
    // <h1
    //   style={{
    //     backgroundColor: "gray",
    //     color: "pink",
    //   }}
    // >
    //   Inline styling
    // </h1>


    //   {/* external */}
//     <h2>external styling</h2>
//   </>,

//   document.getElementById("root")
// );


// --------------exercise 3------------------



// import React from "react";
// import ReactDOM from "react-dom";

// // importing css file
// import "./index.css";



// ReactDOM.render(
//   <>
//     <div className="container">
//       <div className="card">
//         <h1>practice program 3</h1>
//         <div className="rotate"></div>
//       </div>
//     </div>
//   </>,

//   document.getElementById("root")
// );


// -------------components------------


// import React from "react";
// import ReactDOM from "react-dom";

// // import Component1 from "./Component1";

// import App from "./App";

// ReactDOM.render(
//     <>
//         <h1>Components</h1>

//         <App/>

//         {/* <Component1></Component1> 

//         //component1 was deleted

//         <Component1/> */}

//     </>,

//     document.getElementById("root")
// );


// ------------------practicr problem 4-----------------

// import React from "react";
// import ReactDOM from "react-dom";


// import App from "./App";

// ReactDOM.render(
//     <>
//         <App/>
//     </>,
    
//     document.getElementById("root")
// );


// -----------------project 1----------------

// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,

//   document.getElementById("root")
// );


// --------------------props-------------------

// import React from "react";
// import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
    
//   </>,

//   document.getElementById("root")
// );

// -----------------hooks------------------


// import React from "react";
// import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,

//   document.getElementById("root")
// );



// ------------5 projects video----------------

//----------------1st froject-------------------


// import React from "react";
// import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,

//   document.getElementById("root")
// );


// ---------------context api----------------

// import React,{createContext} from "react";
// import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";

// const Language = createContext();
// const Frontend = createContext();



// ReactDOM.render(
//   <>
//     <Language.Provider value={"reactjs"}>
//       <Frontend.Provider value="html">
//         <App />
//       </Frontend.Provider>
//     </Language.Provider>
//   </>,

//   document.getElementById("root")
// );

// export {Language,Frontend};



// --------------useeffect hook--------------

// import React from "react";
// import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,

//   document.getElementById("root")
// );



// --------------router---------------

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <>
//     <Router>
//       <App />
//     </Router>
//   </>,

//   document.getElementById("root")
// );


//--------------responsive website------------

import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'

ReactDOM.render(
  <>
    <Router>
      <App />
    </Router>
  </>,

  document.getElementById("root")
);