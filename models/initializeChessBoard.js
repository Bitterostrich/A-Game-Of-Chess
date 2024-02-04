import { Pawn } from "./Pawn";
import { Bishop } from "./Bishop";
import { King } from "./King";
import { Queen } from "./Queen";
import { Rook } from "./Rook";
import { Knight } from "./Knight";



export const initializePieces = () => {
    return [
       // rooks
        new Rook('white', 'a1'), new Rook('white', 'h1'),new Rook('black', 'a8'), new Rook('black', 'h8'),
       // pawns
       ...Array.from({ length: 8 }).map((_, i) => new Pawn('white', String.fromCharCode(97 + i) + '2')), // ASCII code 97 is for 'a'
       ...Array.from({ length: 8 }).map((_, i) => new Pawn('black', String.fromCharCode(97 + i) + '7')),
       // knights
       new Knight('white', 'b1'), new Knight('white', 'g1'),
       new Knight('black', 'b8'), new Knight('black', 'g8'),
       // queens
       new Queen('white', 'd1'),
       new Queen('black', 'd8'),
       // kings
       new King('white', 'e1'),
       new King('black', 'e8'),
       // bishops
       new Bishop('white', 'c1'), new Bishop('white', 'f1'),
       new Bishop('black', 'c8'), new Bishop('black', 'f8')

    ]
}
