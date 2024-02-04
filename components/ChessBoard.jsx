import React from 'react';
import { useChess } from '../context/ChessContext';

// Define a utility function that takes a chess piece object and returns the URL to its image.
// The image names are assumed to follow the pattern of color and type, e.g., white_pawn.svg
const getPieceImageUrl = (piece) => {
    // The piece's color and type are used to construct the file path.
    return `/pieces/${piece.color}_${piece.type.toLowerCase()}.svg`;
};

// Define the ChessBoard functional component.
const ChessBoard = () => {
    // Destructure the 'pieces' and 'selectPiece' functions from the useChess hook.
    // 'pieces' is an array of piece objects, and 'selectPiece' is a function to handle selection of pieces on the board.
    const { pieces, selectPiece, movePiece, selectedPiece } = useChess();

    // Define a function that is called when a square on the chessboard is clicked.
    // It calls the 'selectPiece' function with the position of the clicked square.
    const handleSquareClick = (position) => {

        if (selectedPiece) {
            movePiece(selectedPiece.position, position)
        } else {
            selectPiece(position);
        }
       
    };

    // Initialize an empty array to represent the squares on the chessboard.
    const boardSize = 8; // Define the size of the chessboard (8x8).
    const board = [];
    
    // Loop over each row (y) and column (x) to create the 8x8 grid.
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            // Calculate the chess position from the grid coordinates.
            // 'a' corresponds to 97 in the ASCII table, so 'a' + x gives us the column.
            // boardSize - y gives us the row, starting from 8 down to 1.
            const position = `${String.fromCharCode(97 + x)}${boardSize - y}`;
            // Find the chess piece object that matches the current position on the board.
            const piece = pieces.find(p => p.position === position);
            // Determine the color of the square based on its coordinates.
            const isLightSquare = (x + y) % 2 === 0;

            // Add a square div to the board array.
            board.push(
                <div key={position} 
                     className="chess-square" 
                     onClick={() => handleSquareClick(position)}
                     style={{
                         width: '40px', 
                         height: '40px', 
                         backgroundColor: isLightSquare ? '#f0d9b5' : '#b58863'
                     }}>
                    {/* If there is a piece at this position, render an image for it */}
                    {piece && (
                        <img src={getPieceImageUrl(piece)} alt={`${piece.type}`} style={{ width: '100%', height: '100%' }} />
                    )}
                </div>
            );
        }
    }

    // Render the chessboard with the squares created above.
    // The grid is styled to have 8 columns each 40px wide, with a small gap between them.
    return (
        <div className="chess-board" style={{ width: '320px', display: 'grid', gridTemplateColumns: 'repeat(8, 40px)', gridGap: '1px' }}>
            {board}
        </div>
    );
};

// Export the ChessBoard component as the default export of this module.
export default ChessBoard;