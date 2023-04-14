import React from 'react';
import Square from "./Square";

const BoardRender = (props) => {
    const {game, move} = props

    return (
        <div className='board'>
            {game.map((elem, index) => <Square value={elem} move={move} index={index}/>)}
        </div>
    );
};

export default BoardRender;