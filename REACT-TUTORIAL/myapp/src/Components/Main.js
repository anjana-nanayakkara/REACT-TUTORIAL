// const name = "anjana nanayakkara";

import { Fragment } from "react";

// function Main(props) {
//   return (
//     <div>
//       {name}
//       <br></br>
//       this is main component
//       {props.children}
//     </div>
//   );
// }

function Main({name, city, position}){

  return(
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hTJAfBnTbRnhQhsVsiKlN_dsi2L0l7C-Rw&usqp=CAU" alt="cardImage" />
      <div>
        <h3>{name}</h3>
        <p>
          <span>{city}</span>
          <span>{position}</span>
        </p>
      </div>
    </div>
  );
}

export default Main;
