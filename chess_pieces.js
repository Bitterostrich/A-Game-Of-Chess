class ChessPieces {
    constructor(type, color, position) {
        this.type = type;
        this.color = color;
        this.position = position
    }
}

class Pawn extends ChessPieces {
    constructor(color, position){
        super('Pawn', color, position)
        this.image = `${color}_pawn.svg`
        this.firstMove = true
    }

    canMoveTo(newPosition) {

        // to identify the column and row position of a piece --
        // if a pawn is at e2, the column is 0 and the row is 1 (e === 0, 2 === 1). List indexing. 

        // Keeping with the theme of e2 being the current this.positon of a pawn
        // const currentColumn extracts the position of 'e' from 'e2' and stores it as the currentColumn
        // const currentRow extracts the position of '2' from 'e2' and stores it as the currentRow


        const currentColumn = this.position.charCodeAt(0)

        console.log('The current column is:', currentColumn)

        const currentRow = this.position.charCodeAt(1)
        

        console.log('The current row is:', currentRow)

        // COLUMS REPRESNT LETTERS AND ROWS REPRESENT THE NUMERICAL VALUES!!!! (going crazy)

    

        // gets the column of the pawns current position
        const newColumn = newPosition.charCodeAt(0) // gets the column of the pawns new position
        console.log('The new column is:', newColumn)

        const newRow = newPosition.charCodeAt(1); // gets the row of the pawns new position
        console.log('The new row is:', newRow)

        if (this.color === "white") {
            if (this.firstMove && newRow === currentRow + 2 && currentColumn === newColumn) {
                this.firstMove = false // sets first move to false. 
                return true // Checks if the pawn has been moved before and if it was been moved two squares up the board
            }
            if (newRow === currentRow + 1 && currentColumn === newColumn) {
                this.firstMove = false
                return true // Regular one square up the board conditional check
            } 
            // black pawn checker
        } else  {
            if (this.firstMove && newRow === currentRow - 2 && currentColumn === newColumn) {
                this.firstMove = false
                return true // Checks if the pawn has been moved before and if it was been moved two squares up the board
            }
            if (newRow === currentRow - 1 && currentColumn === newColumn) {
                this.firstMove = false
                return true // Regular one square up the board conditional check
            } 
        } 

        return false



    }

    canCapture(newPosition, getPieceAt) { 

        const currentColumn = this.position.charCodeAt(0) // retrieves the position of the column i.e a,b,c,d,e,f,g or h. 
        const currentRow = this.position.charCodeAt(1) // retrives the row number (1-8) and stores it. The 

        const newColumn = newPosition.charCodeAt(0)
        const newRow = newPosition.charCodeAt(1)

        
        if (Math.abs(currentColumn - newColumn) === 1) {
            if (this.color === "white" && newRow === currentRow + 1 || this.color === "black" && newRow === currentRow - 1)
                 {
                    const targetPiece = getPieceAt(newPosition);
                    console.log(targetPiece)
                    return targetPiece && targetPiece.color !== this.color
                }
        }
        return false
    }
}

class Rook extends ChessPieces {
    constructor(color, position){
        super('Rook', color, position)
        this.image = `${color}_rook.svg`
        
    }

    move() {

    }

    capture() {

    }
}

class Bishop extends ChessPieces {
    constructor(color, position){
        super('Bishop', color, position)
        this.image = `${color}_bishop.svg`
        
    }

    
    move() {

    }

    capture() {
        
    }
}

class Knight extends ChessPieces {
    constructor(color, position){
        super('Knight', color, position)
        this.image = `${color}_knight.svg`
        
    }

    
    move() {

    }

    capture() {
        
    }
}

class Queen extends ChessPieces {
    constructor(color, position){
        super('Queen', color, position)
        this.image = `${color}_queen.svg`
        
    }

    
    move() {

    }

    capture() {
        
    }
}

class King extends ChessPieces {
    constructor(color, position){
        super('King', color, position)
        this.image = `${color}_king.svg`
        
    }
    
    move() {

    }

    capture() {
        
    }
}

// rooks
let whiteRooks = [new Rook('white', 'a1'), new Rook('white', 'h1')]
let blackRooks = [new Rook('black', 'a8'), new Rook('black', 'h8')]

// knight
let whiteKnights = [new Knight('white', 'b1'), new Knight('white', 'g1')]
let blackKnights = [new Knight('black', 'b8'), new Knight('black', 'g8')]

// bishops
let whiteBishops = [new Bishop('white', 'c1'), new Bishop('white', 'f1')]
let blackBishops = [new Bishop('black', 'c8'), new Bishop('black', 'f8')]

// queen
let whiteQueen = [new Queen('white', 'd1')]
let blackQueen = [new Queen('black', 'd8')]

// king
let whiteKing = [new King('white', 'e1')]
let blackKing = [new King('black', 'e8')]

// pawns 
let whitePawns = [new Pawn('white', 'a2'), new Pawn('white', 'b2'), new Pawn('white', 'c2'), new Pawn('white', 'd2'), new Pawn('white', 'e2'), new Pawn('white', 'f2'), new Pawn('white', 'g2'), new Pawn('white', 'h2')]
let blackPawns = [new Pawn('black', 'a7'), new Pawn('black', 'b7'), new Pawn('black', 'c7'), new Pawn('black', 'd7'), new Pawn('black', 'e7'), new Pawn('black', 'f7'), new Pawn('black', 'g7'), new Pawn('black', 'h7')]



let chessPieces = [
    ...whiteRooks, ...whiteKnights, ...whiteBishops, ...whiteQueen, ...whiteKing, ...whitePawns,
    ...blackRooks, ...blackBishops, ...blackKnights, ...blackQueen, ...blackKing, ...blackPawns
]

export { Pawn, Rook, Bishop, Knight, Queen, King };

export default chessPieces;