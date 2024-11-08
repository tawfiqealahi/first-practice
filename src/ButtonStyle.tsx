import React from 'react';

type Props = {
    btnStyle:  React.CSSProperties 
};

const ButtonStyle: React.FC<Props> = ({btnStyle}) => {
  return (
    <div> 
        <button style={btnStyle}>click me</button>
    </div>
  );
};

export default ButtonStyle;