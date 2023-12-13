import { Pawn, Rook, Bishop, Knight, Queen, King } from '../chess_pieces.js';





describe('Pawn movement', () => {
    test('White pawn can move forward one square', () => {
        const pawn = new Pawn('white', 'e2');
        expect(pawn.canMoveTo('e3')).toBe(true);
    });


})