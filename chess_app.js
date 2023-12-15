import chessPieces from './chess_pieces.js';

class ChessGame {
    constructor() {
        this.chessPieces = chessPieces
        console.log(this.chessPieces)
        this.selectedPiece = null
        this.lastMove = null
    }

    initialize() {
        this.renderPieces();
        this.setupEventListeners()
    }

    getPieceAt(squareId) {
        console.log('getPieceAt square id:', squareId)
    
        return this.chessPieces.find(piece => piece.position === squareId)
    }

    capturePiece(piece, targetSquare) {
        const capturedPiece = this.getPieceAt(targetSquare);
        if(capturedPiece) {
            this.removePiece(capturedPiece)
            document.getElementById(targetSquare).innerHTML =''
        }
        const fromPosition = piece.position;
        this.lastMove = { piece: piece, fromPosition: fromPosition, toPosition: targetSquare };
        this.movePiece(piece, targetSquare)
        console.log('This piece has been captured?:', capturedPiece)
    }

    removePiece(pieceToRemove) {
        this.chessPieces = this.chessPieces.filter(piece => piece !== pieceToRemove)
    }
    
    

    movePiece(piece, targetSquare) {

        // before a piece is moved, the image of the piece needs to be cleared.
        // say a pawn is being moved from e2 to e4, the image of the pawn on e2 has to be removed and updated to e4. 

        
        const fromPosition = piece.position // this stores the original position of the piece before a movement is carried out.  STORE

        document.getElementById(piece.position).innerHTML = '' // clears the image on the current square. CLEAR.

        piece.position = targetSquare // update the position of the piece. NEW MOVE.

        this.lastMove = {piece: piece, fromPosition: fromPosition, toPosition: targetSquare }  // keeps a record of the last move made by a piece. RECORD MOVE HISTORY. 

        console.log(this.lastMove)
     
        const square = document.getElementById(targetSquare); // retrieves the div id of the square being moved to. 
        const img = document.createElement('img'); // creates a new Image element for the piece
        img.src = `./assets/${piece.image}`;
        img.classList.add('chess-piece');
        square.appendChild(img)
        console.log(square)

    }

    performAction(selectedPiece, targetSquare) {

        console.log("Selected piece type:", selectedPiece.constructor.name);
        console.log("Selected piece type, type:", selectedPiece.type);

        if (selectedPiece.canMoveTo(targetSquare, this.getPieceAt.bind(this))) {
            this.movePiece(selectedPiece, targetSquare);
        } else if (selectedPiece.canCapture(targetSquare, this.getPieceAt.bind(this))) {
            this.capturePiece(selectedPiece, targetSquare);
        //} else if (selectedPiece.type === 'Pawn' && selectedPiece.isEnPassantMove(targetSquare, this.lastMove)) {
          //  const capturedSquare = this.lastMove.toPosition.charAt(0) + selectedPiece.position.charAt(1)
           // const capturedPawn = this.getPieceAt(capturedSquare)
            //this.removePiece(capturedPawn)
            //this.movePiece(selectedPiece, targetSquare)

        
        
        } else {
            console.log('Invalid Move. Please select a valid move.')
        }
    }





    clickMove(event) {
        const clickedSquare = event.currentTarget.id
        
        console.log('The current square is:', clickedSquare)

        if (this.selectedPiece) { //checks if a piece has been selected
          
            this.performAction(this.selectedPiece, clickedSquare);
            this.selectedPiece = null  // creates space for further piece movements

            }
         else {
            const piece = this.getPieceAt(clickedSquare);
            console.log('Description of the current piece:', piece)

            if (piece) {
                this.selectedPiece = piece
            } // else if (!this.selectedPiece.canMoveTo(clickedSquare)) {
                // this.selectedPiece = null
           // }
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
            square.addEventListener('click', event => this.clickMove(event))
   
        })
    }

}


document.addEventListener('DOMContentLoaded', () => {
    const chessGame = new ChessGame()
    chessGame.initialize();
    
})

export { ChessGame }