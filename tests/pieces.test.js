import { test } from 'picomatch';
import { Pawn, Rook, Bishop, Knight, Queen, King } from '../chess_pieces.js';



// Pawn Tests

describe('Pawn movement', () => {
    test('White pawn can move forward one square', () => {
        const whitePawn = new Pawn('white', 'e2');

        const mockGetPieceAt = (position) => {
            if (position === '') {
                return null
            }
        }
        expect(whitePawn.canMoveTo('e3', mockGetPieceAt)).toBe(true);
    });

    test("White pawn can move forward two squares on first move", () => {
        const whitePawn = new Pawn('white', 'e2');

        const mockGetPieceAt = (position) => {
            if (position === '') {
                return null
            }
        }

        expect(whitePawn.canMoveTo('e4', mockGetPieceAt)).toBe(true)
    })


    
    test("White pawn should not move forward if blocked", () => {

        const whitePawn = new Pawn("white", "e4");

        const mockGetPieceAt = (position) => {
            if (position === 'e5') {
                return {type : 'anyPiece', color: 'black'}
            }
            return null 

            
        }
        expect(whitePawn.canMoveTo('e5', mockGetPieceAt)).toBe(false)
    })

        



})

describe('Pawn Captures', () => {
    test("White pawn can capture a piece and move one place to the right or left", () => {
        const whitePawn = new Pawn("white", 'e2');

        const mockGetPieceAt = (position) => {
            if (position === 'd3' || position ==='f3') {
                return {type: 'anyPiece', color: 'black'}
            }
            return null
        }


        expect(whitePawn.canCapture('d3', mockGetPieceAt)).toBe(true)
        expect(whitePawn.canCapture('f3', mockGetPieceAt)).toBe(true)
    })

    test("White pawn should not capture a piece ahead of it", () => {

        const whitePawn = new Pawn("white", "e4");

        const mockGetPieceAt = (position) => {
            if (position === 'e5') {
                return {type : 'anyPiece', color: 'black'}
            }
            return null 

            
        }
        expect(whitePawn.canCapture('e5', mockGetPieceAt)).toBe(false)
    })
    // test("White pawn can capture enPassant", () => {

    //     const whitePawn = new Pawn("white", "e5");

    //     const mockGetPieceAt = (position) => {
    //         if (position === 'd5') {
    //             return {type : 'Pawn', color: 'black'}
    //         }
    //         return null 
    //     }

    //     const mockLastMove = {
    //         piece: {type: 'Pawn', color: 'black'},
    //         fromPosition: 'd7',
    //         toPosition: 'd5',
    //     }
    //     expect(whitePawn.isEnpassantMove('d6', mockLastMove)).toBe(true)
    // })


})

// Knight tests

describe('Knight Movement', () => {
    test("Knight should be able to move in its traditional L shape", () => {
        const knight = new Knight("white", "b1");

        expect(knight.canMoveTo('c3')).toBe(true)
    })
})

describe('Knight Captures', () => {

})