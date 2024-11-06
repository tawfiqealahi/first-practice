import React from 'react';

type GreatingProps = {
    name: string;
    age: number;
    isRegister:boolean
};

const Greating: React.FC<GreatingProps> = ({name,age,isRegister}) => {
  return (
    <div>
        <h1> my name is {name} </h1>
        <h2>age: {age} <br /> {isRegister}</h2>
    </div>
  );
};

export default Greating;