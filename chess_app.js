import chessPieces from './chess_pieces.js';

class ChessGame {
    constructor() {
        this.chessPieces = chessPieces
        this.selectedPiece = null
    }

    initialize() {
        this.renderPieces();
        this.setupEventListeners()
    }

    getPieceAt(squareId) {
        return this.chessPieces.find(piece => piece.position === squareId);
    }

    movePiece(piece, targetSquare) {

        document.getElementById(piece.position).innerHTML = '';

        piece.position = targetSquare;

        const square = document.getElementById(targetSquare)
        const img = document.createElement('img');

        img.src = `./assets/${piece.image}`
        img.classList.add('chess-piece');
        square.append(img)
    }

    onSquareClick(event) {
        const clickedSquare = event.target.id

        if (this.selectedPiece) {
            if (this.selectedPiece.canMoveTo(clickedSquare)) {
                this.movePiece(this.selectedPiece, clickedSquare)
                this.selectedPiece = null
            } else {
                console.log('Invalid Move. Please select a valid move.')
            }
        } else {
            const piece = this.getPieceAt(clickedSquare);

            if (piece) {
                this.selectedPiece = piece
            }
        }
    }

    renderPieces() {
    chessPieces.forEach(piece => {

        const square = document.getElementById(piece.position);
        const img = document.createElement('img');
        img.src = `./assets/${piece.image}`
        img.classList.add('chess-piece')
        square.appendChild(img)
            
});
    }

    setupEventListeners() {
        document.querySelectorAll('.chess-square').forEach(square => {
            square.addEventListener('click', event => this.onSquareClick(event))
         
        })
    }

}


document.addEventListener('DOMContentLoaded', () => {
    const chessGame = new ChessGame()
    chessGame.initialize();
    
})