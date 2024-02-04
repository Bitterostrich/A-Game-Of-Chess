import { ChessPieces } from "./ChessPieces"

export class Queen extends ChessPieces {
    constructor(color, position){
        super('Queen', color, position)
        this.image = `${color}_queen.svg`
        
    }

    
    move() {

    }

    capture() {
        
    }
}
