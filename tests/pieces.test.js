import { Pawn, Rook, Bishop, Knight, Queen, King } from '../chess_pieces.js';



// Pawn Tests

describe('Pawn movement', () => {
    test('White pawn can move forward one square', () => {
        const whitePawn = new Pawn('white', 'e2');
        expect(whitePawn.canMoveTo('e3')).toBe(true);
    });

    test("White pawn can move forward two squares on first move", () => {
        const whitePawn = new Pawn('white', 'e2');
        expect(whitePawn.canMoveTo('e4')).toBe(true)
    })

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

})