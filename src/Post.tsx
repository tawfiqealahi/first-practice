import React from 'react';
import Card from './Card';

type Props = {};

const Post : React.FC<Props> = () => {
  return (
    <Card>
        <h2>Post Title 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis vitae ratione est, tempora ducimus minus magnam ipsa doloremque voluptatem.</p>
    </Card>
  );
};

export default Post ;