import React, { useState, Fragment } from 'react';
import './App.css';
import initialChess from './initialChess.json';

const App = () => {
  const initialChessState = initialChess;

  const [chessBoard, setChessBoard] = useState(initialChessState);
  const [grabbedPiece, setGrabbedPiece] = useState({
    piece: '0',
    symbol: '0',
  });

  const handleGrabPiece = (piece) => {
    setGrabbedPiece({ piece: piece.piece, symbol: piece.symbol });
  };

  const handleSetPiece = (squareSelected) => {
    if (squareSelected.piece !== '0') {
      return;
    }
    setChessBoard(() => {
      const newChessBoard = chessBoard.map((row) =>
        row.map((square) => {
          if (square.position === squareSelected.position) {
            return {
              ...square,
              piece: grabbedPiece.piece,
              symbol: grabbedPiece.symbol,
            };
          }

          if (square.piece === grabbedPiece.piece) {
            return {
              ...square,
              piece: '0',
              symbol: '0',
            };
          }

          return square;
        })
      );
      return newChessBoard;
    });
  };
  const setSquareColor = (row, square) => {
    if (row % 2 === 0) {
      if (square % 2 === 0) {
        return 'white';
      } else {
        return 'gray';
      }
    } else {
      if (square % 2 === 0) {
        return 'gray';
      } else {
        return 'white';
      }
    }
  };

  return (
    <>
      <div className='section'>
        <h1 className='title'>The Easy Chess Board</h1>
      </div>
      <div className='section'>
        <div className='base'>
          <div className='baseBoard'>
            {chessBoard.map((row, rowIndex) => (
              <Fragment key={rowIndex}>
                {row.map((square, squareIndex) => (
                  <div
                    key={square.position}
                    className={`squareBoard ${setSquareColor(
                      rowIndex,
                      squareIndex
                    )}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleSetPiece(square)}
                  >
                    {square.symbol === '0' ? (
                      <span className='emptySpace'>{square.symbol}</span>
                    ) : (
                      <span
                        className='piece'
                        draggable={true}
                        onMouseDown={() => {
                          handleGrabPiece(square);
                        }}
                      >
                        {square.symbol}
                      </span>
                    )}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
