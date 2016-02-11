jest.dontMock('../../src/helpers/chess-helper');

import ChessHelper from '../../src/helpers/chess-helper';

console.log('chesshelper', ChessHelper.default);

const chessHelper = ChessHelper.getInstance();

describe('ChessHelper', () => {
    describe('calculatePotentialPlaces method', () => {
        it('should be defined', () => {
            expect(chessHelper.calculatePotentialPlaces).toBeDefined();
        });

        // TODO
    });

    describe('canMoveHere method', () => {
        it('should be defined', () => {
            expect(chessHelper.canMoveHere).toBeDefined();
        });

        // TODO
    });
});
