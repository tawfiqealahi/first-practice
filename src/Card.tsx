import React from 'react';

type Props = {
    children: React.ReactNode
};

const Card: React.FC<Props> = ({children}) => {
  return (
    <div style={{border:'1px solid red'}} >
        {children}
    </div>
  );
};

export default Card;