// Import the necessary hooks and createContext function from React.
import React, { createContext, useContext, useState } from 'react';
// Import the initializePieces function which sets up the initial state of the chessboard pieces.
import { initializePieces } from '../models/initializeChessBoard';

// Create a new Context object which can be used to pass data through the component tree without having to pass props down manually.
const ChessContext = createContext();

// Define a provider component that will wrap the part of our app where we want the chess data to be accessible.
export const ChessProvider = ({ children }) => {
    // State hook to keep track of all the chess pieces on the board.
    const [pieces, setPieces] = useState(initializePieces());
    // State hook to keep track of the currently selected piece.
    const [selectedPiece, setSelectedPiece] = useState(null);

    // Function that will be called when a piece is selected on the chessboard.
    const selectPiece = (position) => {
        // Find the piece that is at the given position.
        const piece = pieces.find(p => p.position === position);
        // Set that piece as the selected piece, or set to null if no piece is found.
        setSelectedPiece(piece || null);
    };

    // Function that will be called when a piece is moved from one position to another.
    const movePiece = (fromPosition, toPosition) => {
        // Find the piece that is moving from the given position.
        const movingPiece = pieces.find(p => p.position === fromPosition);
        // If no piece is found at the fromPosition, return early as there's no piece to move.
        if (!movingPiece) return;

        // Check if the move is valid based on the piece's logic.

        
                               // moving to                        piece retrieval                         last move
        if(movingPiece.canMoveTo(toPosition, position => pieces.find(p => p.position === position), movingPiece.lastMove)) { // canMoveTo function takes three arguments, the position being mvoed to, retrieving the piece and the lastmove the piece made. 
            // If the move is valid, map over the pieces array to produce a new array with the moved piece's position updated.
            const updatedPieces = pieces.map(piece => {
                // If we're at the moving piece, return a new piece object with the updated position.
                if (piece.position === fromPosition) {
                    return { ...piece, position: toPosition};
                }
                // For all other pieces, return them as they are.
                return piece;
            });
            // Update the pieces state with the new array of pieces.
            setPieces(updatedPieces);
            // Record the last move of the piece.
            movingPiece.recordLastMove(fromPosition, toPosition);
            // Reset selectedPiece to null as the move has been completed.
            setSelectedPiece(null);
        }
    };

    // Render the provider component with the value prop set to an object containing our state and functions.
    // Any descendant components will be able to access these values through the useChess hook.
    return (
        <ChessContext.Provider value={{ pieces, selectPiece, movePiece, selectedPiece }}>
            {children}
        </ChessContext.Provider>
    );
};

// Define a custom hook to provide easy access to the context data.
export const useChess = () => useContext(ChessContext);