import React from 'react';
import Square from "./Square";

const BoardRender = (props) => {
   const {board, step, winner} = props

    return (
        <div className='board'>
            {board.map((elem, index) =>
                <Square
                    value={elem}
                    step={step}
                    index={index}
                    winner={winner}
                />)}
        </div>
    );
};

export default BoardRender;