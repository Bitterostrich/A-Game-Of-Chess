import React, { createContext, useContext, useState } from 'react';
import { initializePieces } from '../models/initializeChessBoard';

const ChessContext = createContext();

export const ChessProvider = ({ children }) => {
    const [pieces, setPieces] = useState(initializePieces());
    const [selectedPiece, setSelectedPiece] = useState(null);

    const selectPiece = (position) => {
        const piece = pieces.find(p => p.position === position)
        setSelectedPiece(piece || null)
    }

    const movePiece = (fromPosition, toPosition) => {
        const movingPiece = pieces.find(p => p.position === fromPosition)
        if (!movingPiece) return 


        // move validation
        
    if(movingPiece.canMoveTo(toPosition, position => pieces.find(p => p.position === position), movingPiece.lastMove)) {
        const updatedPieces = pieces.map(piece => {
            if (piece.position === fromPosition) {
                return { ...piece, position: toPosition};
            }
            return piece
        })
        setPieces(updatedPieces)
        movingPiece.recordLastMove(fromPosition, toPosition);
        setSelectedPiece(null)
    }
    }


    return (
        <ChessContext.Provider value = {{ pieces, selectPiece, movePiece, selectedPiece}}>
            {children}
        </ChessContext.Provider>
    )
}

export const useChess = () => useContext(ChessContext)