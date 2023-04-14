import React from 'react';

const Square = (props) => {
    const {value, move, index} = props;

    return (<button className='square' onClick={() => move(value, index)}>
            <div className='value'>{value}</div>
           </button>);
};

export default Square;