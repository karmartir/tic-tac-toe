import React from 'react';

const Square = (props) => {
    const {value, step, index, winner} = props;

    return (<button
        className='square'
        disabled={winner}
        onClick={() => step(value, index)}>

        <div className='value'>
            {value}
        </div>
    </button>);
};

export default Square;