import { ChessPieces } from "./ChessPieces"

export class Bishop extends ChessPieces {
    constructor(color, position){
        super('Bishop', color, position)
        this.image = `${color}_bishop.svg`
        
    }

    
    canMoveTo(newPosition, getPieceAt, lastMove) {

        const currentColumn = this.position.charCodeAt(0)
        const currentRow = this.position.charCodeAt(1)

        const newColumn = newPosition.charCodeAt(0)
        const newRow = newPosition.charCodeAt(1)

        const targetPiece = getPieceAt(newPosition)

        if (targetPiece) {
            console.log('There is a piece blocking the path of the Bishop!')
            return false
        }

        if (Math.abs(newColumn - currentColumn) !== Math.abs(newRow - currentRow)) { // checks if the move is diagonal. A diagonal move is one where moves on the horizontal axis matches the moves on the vertical axis. 
            return false
        }

        const columnStep = newColumn > currentColumn ? 1 : -1; // if the new column is greater, then the column step is 1. Meaning the bishop is moving to the right of the board. Else, -1, meaning it is moving to the left. 
        const rowStep = newRow > currentRow ? 1 : -1 // if
        
        

        let checkColumn = currentColumn + columnStep
        let checkRow = currentRow + rowStep

        while (checkColumn !== newColumn && checkRow !== newRow) {
            const checkPosition = checkColumn + checkRow;
            if(getPieceAt(checkPosition)) {
                return false 
            }
            checkColumn += columnStep
            checkRow += rowStep
        }
        return true

    }

    capture() {
        
    }
}
