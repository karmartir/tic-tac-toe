import './App.css';
import {useEffect, useState} from "react";
import BoardRender from "./BoardRender";

function App() {
    const [board, setBoard] = useState(new Array(9).fill(null))
    const [symbol, setSymbol] = useState('X')
    const [winner, setWinner] = useState(null)
    const [score, setScore] = useState({'X': 0, '0': 0})
    const step = (value, index) => {
        if (value === null) {

            const newGame = board.map((elem, i) => (i === index) ? symbol : elem)
            setSymbol((symbol === 'X') ? "0" : "X")
            setBoard(newGame)
        }
    }

    const checkWinner = () => {
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                setWinner(board[a])
                if (board[a] === 'X') {
                    const newScore = {...score, 'X': score['X'] + 1}
                    setScore(newScore)
                } else {
                    const newScore = {...score, '0': score['0'] + 1}
                    setScore(newScore)
                }
            }
        }
    }
    const restart = () => {
        setBoard(board.map(el => null))
        setWinner(null)
        setSymbol('X')
    }

    useEffect(() => {
        checkWinner()
    }, [board])

    useEffect(() => {
        if (winner !== null) {
            setTimeout(() => {
                restart()
            }, 5000)
        }
    }, [winner])

    return (
        <div className="App">
            <h1 className='header'>Tic Tac Toe</h1>

            <div>
                <BoardRender
                    board={board}
                    step={step}
                    winner={winner}
                />

                <div className='scoreX'> <strong >1st player:{score['X']}</strong> </div>
                <div className='score0'> <strong> 2nd player:{score['0']}</strong> </div>
                {winner && <h3 className='winner'>Congratulations the {winner} is a winner</h3>}

            </div>
        </div>
    );
}

export default App;
