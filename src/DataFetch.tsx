import React from 'react';

type Props = {
    status: 'success' | 'loading' | 'error'
};

const DataFetch: React.FC<Props> = ({status}) => {
    if(status==='loading'){
        return <h2>Data is loading...........</h2>
    }else if(status==='error'){
        return <h2>Error. Data could not fetched</h2>
    }
  return (
    <div>
      
      
        <h2>Data fetch successfully</h2>
    </div>
  );
};

export default DataFetch;