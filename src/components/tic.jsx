import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => (
    <button className="btn btn-light border square" onClick={() => handleClick(i)}>
      {board[i]}
    </button>
  );

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every(Boolean)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Tic Tac Toe</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="mb-3 text-center">
            <h3>{status}</h3>
          </div>
          <div className="game-board">
            <div className="row g-0">
              <div className="col-4">{renderSquare(0)}</div>
              <div className="col-4">{renderSquare(1)}</div>
              <div className="col-4">{renderSquare(2)}</div>
            </div>
            <div className="row g-0">
              <div className="col-4">{renderSquare(3)}</div>
              <div className="col-4">{renderSquare(4)}</div>
              <div className="col-4">{renderSquare(5)}</div>
            </div>
            <div className="row g-0">
              <div className="col-4">{renderSquare(6)}</div>
              <div className="col-4">{renderSquare(7)}</div>
              <div className="col-4">{renderSquare(8)}</div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <button className="btn btn-primary" onClick={resetGame}>
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;