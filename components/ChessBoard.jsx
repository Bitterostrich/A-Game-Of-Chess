import React from 'react';
import { useChess } from '../context/ChessContext';

const getPieceImageUrl = (piece) => {
    return `/pieces/${piece.color}_${piece.type.toLowerCase()}.svg`;
};

const ChessBoard = () => {
    const { pieces, selectPiece } = useChess();

    const handleSquareClick = (position) => {
        selectPiece(position);
    };

    // Create an 8x8 grid for the chessboard
    const boardSize = 8;
    const board = [];
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            // Convert grid position to chess position (e.g., 0,0 -> 'a8')
            const position = `${String.fromCharCode(97 + x)}${boardSize - y}`;
            const piece = pieces.find(p => p.position === position);
            const isLightSquare = (x + y) % 2 === 0;

            board.push(
                <div key={position} 
                     className="chess-square" 
                     onClick={() => handleSquareClick(position)}
                     style={{
                         width: '40px', 
                         height: '40px', 
                         backgroundColor: isLightSquare ? '#f0d9b5' : '#b58863'
                     }}>
                    {piece && (
                        <img src={getPieceImageUrl(piece)} alt={`${piece.type}`} style={{ width: '100%', height: '100%' }} />
                    )}
                </div>
            );
        }
    }

    return (
        <div className="chess-board" style={{ width: '320px', display: 'grid', gridTemplateColumns: 'repeat(8, 40px)', gridGap: '1px' }}>
            {board}
        </div>
    );
};

export default ChessBoard;