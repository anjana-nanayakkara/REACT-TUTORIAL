// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <h1>I am footer</h1>
//     </>
//   );
// };

// export default Footer;



// -----------------project 1----------------

// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <div className="container-fluid px-0">
//         <div className="card text-center">
//           <div className="card-header">Featured</div>
//           <div className="card-body">
//             <h5 className="card-title">Special title treatment</h5>
//             <p className="card-text">
//               With supporting text below as a natural lead-in to additional
//               content.
//             </p>
           
//           </div>
//           <div className="card-footer text-muted">Hail Anjana</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;


//--------------responsive website------------

import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div class="card text-center">
        
        <div class="card-body bg-dark text-light">
          <h5 class="card-title">react project</h5>
          <p class="card-text">
            anjana nanayakkara
          </p>
          <NavLink exact to="/"><button className='btn btn-primary'>Home Page</button></NavLink>
        </div>
        
      </div>
    </>
  );
}

export default Footer