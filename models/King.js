import { ChessPieces } from "./ChessPieces"

export class King extends ChessPieces {
    constructor(color, position){
        super('King', color, position)
        this.image = `${color}_king.svg`
        
    }
    
    move() {

    }

    capture() {
        
    }
}
