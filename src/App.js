import React, { useState } from 'react';
import './App.css';

const App = () => {
  const initialChessState = [
    [
      { position: 'A1', piece: 'RW1' },
      { position: 'B1', piece: 'KW1' },
      { position: 'C1', piece: 'BW1' },
      { position: 'D1', piece: 'QW' },
      { position: 'E1', piece: 'KW' },
      { position: 'F1', piece: 'BW2' },
      { position: 'G1', piece: 'KW2' },
      { position: 'H1', piece: 'RW2' },
    ],
    [
      { position: 'A2', piece: 'PW1' },
      { position: 'B2', piece: 'PW2' },
      { position: 'C2', piece: 'PW3' },
      { position: 'D2', piece: 'PW4' },
      { position: 'E2', piece: 'PW5' },
      { position: 'F2', piece: 'PW6' },
      { position: 'G2', piece: 'PW7' },
      { position: 'H2', piece: 'PW8' },
    ],
    [
      { position: 'A3', piece: '0' },
      { position: 'B3', piece: '0' },
      { position: 'C3', piece: '0' },
      { position: 'D3', piece: '0' },
      { position: 'E3', piece: '0' },
      { position: 'F3', piece: '0' },
      { position: 'G3', piece: '0' },
      { position: 'H3', piece: '0' },
    ],
    [
      { position: 'A4', piece: '0' },
      { position: 'B4', piece: '0' },
      { position: 'C4', piece: '0' },
      { position: 'D4', piece: '0' },
      { position: 'E4', piece: '0' },
      { position: 'F4', piece: '0' },
      { position: 'G4', piece: '0' },
      { position: 'H4', piece: '0' },
    ],
    [
      { position: 'A5', piece: '0' },
      { position: 'B5', piece: '0' },
      { position: 'C5', piece: '0' },
      { position: 'D5', piece: '0' },
      { position: 'E5', piece: '0' },
      { position: 'F5', piece: '0' },
      { position: 'G5', piece: '0' },
      { position: 'H5', piece: '0' },
    ],
    [
      { position: 'A6', piece: '0' },
      { position: 'B6', piece: '0' },
      { position: 'C6', piece: '0' },
      { position: 'D6', piece: '0' },
      { position: 'E6', piece: '0' },
      { position: 'F6', piece: '0' },
      { position: 'G6', piece: '0' },
      { position: 'H6', piece: '0' },
    ],
    [
      { position: 'A7', piece: 'PB1' },
      { position: 'B7', piece: 'PB2' },
      { position: 'C7', piece: 'PB3' },
      { position: 'D7', piece: 'PB4' },
      { position: 'E7', piece: 'PB5' },
      { position: 'F7', piece: 'PB6' },
      { position: 'G7', piece: 'PB7' },
      { position: 'H7', piece: 'PB8' },
    ],
    [
      { position: 'A8', piece: 'RB1' },
      { position: 'B8', piece: 'KB1' },
      { position: 'C8', piece: 'BB1' },
      { position: 'D8', piece: 'QB' },
      { position: 'E8', piece: 'KB' },
      { position: 'F8', piece: 'BB2' },
      { position: 'G8', piece: 'KB2' },
      { position: 'H8', piece: 'RB2' },
    ],
  ];

  const [chessBoard, setChessBoard] = useState(initialChessState);

  return (
    <>
      <h1>Simple Chess Board</h1>
      <div className='baseBoard'></div>
    </>
  );
};

export default App;
