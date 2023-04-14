import './App.css';
import {useState} from "react";
import BoardRender from "./BoardRender";

function App() {
    const [game, setGame] = useState(new Array(9).fill(null))
    const[symbol, setSymbol] = useState('X')

    const move = (value, index) => {
    if(value === null) {

        const newGame = game.map((elem, i) => (i === index) ? symbol : elem)
        setSymbol((symbol === 'X') ? "0" : "X")
        setGame(newGame)
    }
    }


    return (
        <div className="App">
            <h1 className='header'>Tic Tac Toe</h1>
           <div>
            <BoardRender game={game} move={move}/>
           </div>
        </div>
    );
}

export default App;
