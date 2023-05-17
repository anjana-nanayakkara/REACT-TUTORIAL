// import { Fragment } from 'react';
import './App.css';
import Main from './Components/Main';
import myData from './Data/myData';


// function App() {
//   return (
//     <>
//     <div>
//       <h1>anjana</h1>
//       <Main/>
//     </div>
//     <Main/>
//     {myData.map(({name, city, position, id}) =>{
//       return<Main key={id} name={name} city={city} position={position} />;
//     })}
      
//     </>



    
//   );
// }

function App() {
  const mainBlock = myData.map(({name, city, position, id}) => {
    return <Main key={id} name={name} city={city} position={position}/>;
  });

  return (
    <div className='main'>
      <div>
        anjana nanayakkara
        <h1>hellow there</h1>
      </div>
      <p>genaral kenobi</p>
      <div className="mainBlock">
        {mainBlock}
      </div>
      
    </div>
  );
}

export default App;
