// Workaround for issue in JEST + ES2015 classes (https://github.com/babel/babel-jest/issues/16)
import '../unmock/chess-helper.unmock';
import ChessHelper from '../../src/helpers/chess-helper';

const chessHelper = ChessHelper.getInstance();

describe('ChessHelper', () => {
    describe('calculatePotentialPlaces method', () => {
        it('should be defined', () => {
            expect(chessHelper.calculatePotentialPlaces).toBeDefined();
        });

        it('should calculate the correct potential places', () => {
            const exampleRow = 4;
            const exampleColumn = 2;
            const result = chessHelper.calculatePotentialPlaces(exampleRow, exampleColumn);

            expect(result).toContain('6|1');
            expect(result).toContain('6|3');
            expect(result).toContain('2|1');
            expect(result).toContain('2|3');
            expect(result).toContain('5|4');
            expect(result).toContain('5|0');
            expect(result).toContain('3|0');
            expect(result).toContain('3|4');
        });
    });

    describe('canMoveHere method', () => {
        it('should be defined', () => {
            expect(chessHelper.canMoveHere).toBeDefined();
        });

        // TODO
    });
});
