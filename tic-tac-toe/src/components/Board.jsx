// board.jsx
import { useState } from "react";
import React from "react";
import Square from "./Square";

const Board = () => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [state, setState] = useState(Array(9).fill(null));

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    if (state.every(cell => cell)) {
      return "Draw";
    }

    return null;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] || isWinner) return;
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const playAgain = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <div className="result">
          <p>{isWinner === "Draw" ? "It's a Draw!" : `${isWinner} Won the Game!`}</p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      ) : (
        <>
          <h4>Player {isXTurn ? "X" : "O"}'s Turn</h4>
          <div className="board">
            {state.map((value, index) => (
              <Square key={index} value={value} click={() => handleClick(index)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
