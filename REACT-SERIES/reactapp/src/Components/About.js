// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       <h1>this is about</h1>
//     </div>
//   );
// }

// export default About


// ------------------routing navbar-----------------

// import React from "react";

// const About = () => {
//   return (
//     <>
//       <h1>i am about page</h1>
//     </>
//   );
// };

// export default About;

//--------------responsive website------------

import React from "react";
import Card from "./Card";
import Data from "./Data";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4 d-flex align-items-center">
          <div className="col-xs-12 col-md-6">
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.Some quick example text to build on the
              card title and make up the bulk of the card's content.Some quick
              example text to build on the card title and make up the bulk of
              the card's content.
            </p>

            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src="../Images/image4.jpg" className="about" />
          </div>
        </div>
      </div>
      {/* meet our team section */}
      <h1 className="text-center text-info">Meet our team</h1>

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

export default About;

