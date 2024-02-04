export class ChessPieces {
    constructor(type, color, position) {
        this.type = type;
        this.color = color;
        this.position = position
        this.lastMove = null 
    }

    recordLastMove(piece, fromPosition, toPosition) {
        this.lastMove = { piece, fromPosition, toPosition}
    }
}



