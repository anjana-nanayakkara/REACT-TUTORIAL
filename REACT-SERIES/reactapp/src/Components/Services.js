// import React from 'react'

// const Services = () => {
//   return (
//     <>
//       <h1>i am services page</h1>
//     </>
//   );
// }

// export default Services

//--------------responsive website------------


import React from "react";
import Data from "./Data";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <h1 className="text-center">Our Services</h1>
      <div className="container">
        <div className="row">
          {Data.map((values) => {
            return (
              <>
                <Card title={values.title} image={values.imgsrc} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;