import React from 'react';
import Greating from './Greating';



function App(){
 
  return (
    <div className='App' >
      <Greating
       name='tawfiq'
       age={23}
        isRegister={false} friendName={['tawfiq ','razu ','rahim']} ></Greating>
    </div>
  );
};

export default App;