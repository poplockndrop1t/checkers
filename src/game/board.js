import React from 'react';
import './board.css';


const Board = (props) => (
  <div>
    <h1>Game Board</h1>
    <div>
      {
        props.board.map((row, key) => {
          return `${row}${key}`
        });
      }
    </div>
  </div>
);

export default Board;

