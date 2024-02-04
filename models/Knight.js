import { ChessPieces } from "./ChessPieces"

export class Knight extends ChessPieces {
    constructor(color, position){
        super('Knight', color, position)
        this.image = `${color}_knight.svg`
        
    }

    
    canMoveTo(newPosition, getPieceAt, lastMove) {
        const currentColumn = this.position.charCodeAt(0)
        const currentRow = this.position.charCodeAt(1)

        const newColumn = newPosition.charCodeAt(0)
        const newRow = newPosition.charCodeAt(1)

        const columnDistance = Math.abs(currentColumn - newColumn)
        const rowDistance = Math.abs(currentRow - newRow);

        const targetPiece = getPieceAt(newPosition)

        if (columnDistance === 2 && rowDistance === 1 || columnDistance === 1 && rowDistance === 2) {
            return true
        }

        if (targetPiece) {
            return false
        }

    }

    canCapture(newPosition, getPieceAt) {
        
    }
}