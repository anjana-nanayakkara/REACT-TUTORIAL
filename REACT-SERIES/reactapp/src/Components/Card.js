// import React from "react";

// const Card = () => {
//   return (
//     <>
//       <div className="col-lg-3">
//         <div className="card">
//           <img src="../Images/image1.jpg" className="card-img-top" alt="..." />

//           <div className="card-body">
//             <h5 className="card-title">Astronant 1</h5>

//             <p className="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>

//             <a href="#" className="btn btn-primary">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;


//--------------responsive website------------

import React from 'react'
// import Data from './Data';

const Card = ({title,image}) => {
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-4 my-4">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card

