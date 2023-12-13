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
    }

    move() {

    }

    capture() {

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

export default chessPieces