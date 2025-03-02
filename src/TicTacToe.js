import './TicTacToe.css';
import { useState } from 'react';
import Square from './Square.js';

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [current, setCurrent] = useState('X');

    function handleClick(i) {
        const nextSquares =  squares.slice();

        if(nextSquares[i] == null && !calculateWinner(squares)) {
            nextSquares[i] = current;
            setSquares(nextSquares);
            if(current == 'X')
                setCurrent('O');
            else
                setCurrent('X');
        }
    }

    function handleReset() {
        setSquares(Array(9).fill(null));
        setCurrent('X');
    }
  
    const winner = calculateWinner(squares);
    if(winner)
        status = "Winner: " + winner;
    else
        status = "Next player: " + current;

    let row1 = (
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>    
    );
    
    let row2 = (
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
    );
    
    let row3 = (
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
    );   

    console.log('Render');
    
  return (
    <>
        <div className="status">{status}</div>
        {row1}
        {row2}
        {row3}
        <div className="">
            <button className="resetBtn" onClick={handleReset}>Reset</button>
        </div>
    </>
  );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
  
    let i = 0, found = null;
    while((i < lines.length) && (found === null)) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            found = squares[a];
        else
            i++;
    }    
    return found;
}