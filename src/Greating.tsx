import React from 'react';

type GreatingProps = {
    name: string;
    age: number;
    isRegister:boolean;
    friendName:string[]
};

const Greating: React.FC<GreatingProps> = ({name,age,isRegister,friendName}) => {
  return (
    <div>
        <h1> my name is {name} </h1>
        <h2>age: {age} <br /> {isRegister?'registered ': "log in now"}</h2>
        <h2> friends Name: {friendName.map((friendName,index)=>{
         return <span key={index}>{friendName},</span>
        })} </h2>
    </div>
  );
};

export default Greating;