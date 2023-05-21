// import React from 'react'


// const C = ({ myname }) => {
//   return (
//     <>
//       <h1>compenent C {myname} in c</h1>
//     </>
//   );
// };

// export default C;

// // -------------context api--------------

// import React from "react";
// import { Language,Frontend } from '../index.js'

// const C = () => {
//   return (
//     <>
//      <Language.Consumer>
//         {(fname)=>{
//             return (
//             <Frontend.Consumer>{(frontend)=>{
//                 return <h1>{frontend} is use for structureing {fname}</h1>
//             }}</Frontend.Consumer>
//             )}
//         }
            
        
//      </Language.Consumer>
//     </>
//   );
// };

// export default C;

// -------------useContext hook--------------

import React,{useContext} from "react";
import { Language,Frontend } from '../index.js'



const C = () => {

    const lang=useContext(Language);
    const fe = useContext(Frontend);
  return (
    <>
     {/* <Language.Consumer>
        {(fname)=>{
            return (
            <Frontend.Consumer>{(frontend)=>{
                return <h1>{frontend} is use for structureing {fname}</h1>
            }}</Frontend.Consumer>
            )}
        }
            
        
     </Language.Consumer> */}

     <h1>{fe} is used for structure and {lang} is a library</h1>
    </>
  );
};

export default C;