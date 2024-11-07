import React from 'react';
import Greating from './Greating';


const users=[
  {
    id:1,
    name:'tera raw',
    email: 'tawfiqealahi@getMaxListeners.com',
    age:15
  },
  {
    id:2,
    name:'tawfiq',
    email: 'tawfiqealahi@getMaxListeners.com',
    age:25
  },
  {
    id:3,
    name:'laabib',
    email: 'tawfiqealahi@getMaxListeners.com',
    age:29
  }
]

function App(){
 
  return (
    <div className='App' >
      <Greating  users={users}></Greating>
    </div>
  );
};

export default App;