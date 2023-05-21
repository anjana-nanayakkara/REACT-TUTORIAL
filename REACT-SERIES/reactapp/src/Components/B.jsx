// import React from 'react'
// import C from "./C";

// const B = ({ myname }) => {
//   return (
//     <>
//       <h1>compenent B {myname} in b</h1>
//       <C myname="Anjana" />
//     </>
//   );
// };

// export default B;


//----------------context api----------------

import React from "react";
import C from "./C";
import { Language } from "../index.js";

const B = () => {
  return (
    <>
      <Language.Consumer>
        {(fname) => {
          return <h1>im from component b.my favourite language is {fname}</h1>;
        }}
      </Language.Consumer>
    </>
  );
};

export default B;