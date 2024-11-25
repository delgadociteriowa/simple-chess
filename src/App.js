import React, { useState, Fragment } from 'react';
import './App.css';

const App = () => {
  const initialChessState = [
    [
      { position: 'A8', piece: 'RW1', symbol: '♜' },
      { position: 'B8', piece: 'KW1', symbol: '♞' },
      { position: 'C8', piece: 'BW1', symbol: '♝' },
      { position: 'D8', piece: 'QW', symbol: '♛' },
      { position: 'E8', piece: 'KW', symbol: '♚' },
      { position: 'F8', piece: 'BW2', symbol: '♝' },
      { position: 'G8', piece: 'KW2', symbol: '♞' },
      { position: 'H8', piece: 'RW2', symbol: '♜' },
    ],
    [
      { position: 'A7', piece: 'PW1', symbol: '♟' },
      { position: 'B7', piece: 'PW2', symbol: '♟' },
      { position: 'C7', piece: 'PW3', symbol: '♟' },
      { position: 'D7', piece: 'PW4', symbol: '♟' },
      { position: 'E7', piece: 'PW5', symbol: '♟' },
      { position: 'F7', piece: 'PW6', symbol: '♟' },
      { position: 'G7', piece: 'PW7', symbol: '♟' },
      { position: 'H7', piece: 'PW8', symbol: '♟' },
    ],
    [
      { position: 'A6', piece: '0', symbol: '0' },
      { position: 'B6', piece: '0', symbol: '0' },
      { position: 'C6', piece: '0', symbol: '0' },
      { position: 'D6', piece: '0', symbol: '0' },
      { position: 'E6', piece: '0', symbol: '0' },
      { position: 'F6', piece: '0', symbol: '0' },
      { position: 'G6', piece: '0', symbol: '0' },
      { position: 'H6', piece: '0', symbol: '0' },
    ],
    [
      { position: 'A5', piece: '0', symbol: '0' },
      { position: 'B5', piece: '0', symbol: '0' },
      { position: 'C5', piece: '0', symbol: '0' },
      { position: 'D5', piece: '0', symbol: '0' },
      { position: 'E5', piece: '0', symbol: '0' },
      { position: 'F5', piece: '0', symbol: '0' },
      { position: 'G5', piece: '0', symbol: '0' },
      { position: 'H5', piece: '0', symbol: '0' },
    ],
    [
      { position: 'A4', piece: '0', symbol: '0' },
      { position: 'B4', piece: '0', symbol: '0' },
      { position: 'C4', piece: '0', symbol: '0' },
      { position: 'D4', piece: '0', symbol: '0' },
      { position: 'E4', piece: '0', symbol: '0' },
      { position: 'F4', piece: '0', symbol: '0' },
      { position: 'G4', piece: '0', symbol: '0' },
      { position: 'H4', piece: '0', symbol: '0' },
    ],
    [
      { position: 'A3', piece: '0', symbol: '0' },
      { position: 'B3', piece: '0', symbol: '0' },
      { position: 'C3', piece: '0', symbol: '0' },
      { position: 'D3', piece: '0', symbol: '0' },
      { position: 'E3', piece: '0', symbol: '0' },
      { position: 'F3', piece: '0', symbol: '0' },
      { position: 'G3', piece: '0', symbol: '0' },
      { position: 'H3', piece: '0', symbol: '0' },
    ],
    [
      { position: 'A2', piece: 'PB1', symbol: '♙' },
      { position: 'B2', piece: 'PB2', symbol: '♙' },
      { position: 'C2', piece: 'PB3', symbol: '♙' },
      { position: 'D2', piece: 'PB4', symbol: '♙' },
      { position: 'E2', piece: 'PB5', symbol: '♙' },
      { position: 'F2', piece: 'PB6', symbol: '♙' },
      { position: 'G2', piece: 'PB7', symbol: '♙' },
      { position: 'H2', piece: 'PB8', symbol: '♙' },
    ],
    [
      { position: 'A1', piece: 'RB1', symbol: '♖' },
      { position: 'B1', piece: 'KB1', symbol: '♘' },
      { position: 'C1', piece: 'BB1', symbol: '♗' },
      { position: 'D1', piece: 'QB', symbol: '♕' },
      { position: 'E1', piece: 'KB', symbol: '♔' },
      { position: 'F1', piece: 'BB2', symbol: '♗' },
      { position: 'G1', piece: 'KB2', symbol: '♘' },
      { position: 'H1', piece: 'RB2', symbol: '♖' },
    ],
  ];

  const [chessBoard, setChessBoard] = useState(initialChessState);
  const [grabbedPiece, setGrabbedPiece] = useState('none');

  const handleGrabPiece = () => {
    setGrabbedPiece('A piece');
  };

  const handleDropPiece = () => {
    setGrabbedPiece('none');
  };

  return (
    <>
      <h1>Simple Chess Board</h1>
      <h2>Selected Piece: {grabbedPiece}</h2>
      <div className='baseBoard'>
        {chessBoard.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            {row.map((square) => (
              <div key={square.position} className='squareBoard'>
                {square.symbol === '0' ? (
                  <span className='emptySpace'>A</span>
                ) : (
                  <span
                    className='piece'
                    draggable={true}
                    onMouseDown={handleGrabPiece}
                    onMouseUp={handleDropPiece}
                  >
                    {square.symbol}
                  </span>
                )}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default App;
