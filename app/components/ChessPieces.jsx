import React from 'react'

const ChessBoard = ({ pieces }) => {

    const renderSquare = (i) => {
        const piece = pieces.find(piece => piece.position === i)
        
        return (
            <div key={i} className='chess-square'>
                <ChessPiece piece={piece} />
        </div>
        )
    }

    const boardSquares = []
    for (let i = 0; i < 64; ++i) {
        boardSquares.push(renderSquare(i))
    }

    return (
        <div className='chess-board'>
            {boardSquares}
        </div>
    )
}

export default ChessBoard