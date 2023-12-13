import chessPieces from './chess_pieces.js';

class ChessGame {
    constructor() {
        this.chessPieces = chessPieces
    }

    initialize() {
        this.renderPieces();
        this.setupEventListeners()
    }

    renderPieces() {
    chessPieces.forEach(piece => {

    console.log("renderPieces function is being called");

    console.log("Piece:", piece);

    const square = document.getElementById(piece.position);
    const img = document.createElement('img');
    img.src = `./assets/${piece.image}`
                
    console.log(img.src)
    img.classList.add('chess-piece')
    square.appendChild(img)
            
});
    }

}







document.addEventListener('DOMContentLoaded', () => {
    const chessGame = new ChessGame()
    chessGame.initialize();
    
})