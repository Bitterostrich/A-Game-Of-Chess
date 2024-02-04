import { ChessPieces } from "./ChessPieces"

export class Rook extends ChessPieces {
    constructor(color, position){
        super('Rook', color, position)
        this.image = `${color}_rook.svg`
        
    }

    move() {

    }

    capture() {

    }
}
