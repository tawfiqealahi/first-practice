import React from 'react';

type GreatingProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
}[]
};

const Greating: React.FC<GreatingProps> = ({users}) => {
 const {id,name,email,age}= users[0];

  return (
    <div>
     {
      users.map((users)=>{
        return <div key={id}>
          <h1>{id}</h1>
          <h1>name: {name}</h1>
          <p>email: {email} </p>
          <p>age: {age}</p>

        </div>
      })
     }
    </div>
  );
};

export default Greating;