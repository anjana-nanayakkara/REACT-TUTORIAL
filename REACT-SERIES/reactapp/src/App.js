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


import React, { useState } from "react";

const App = () => {
  
  const [numbers,setnumbers]=useState(0);
  const increment=()=>{
    setnumbers(numbers+1);
  }

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h1>{numbers}</h1>
          <button className="btn btn-warning btn-lg" onClick={increment}>Click Me</button>
        </div>
      </div>
    </>
  );
};

export default App;