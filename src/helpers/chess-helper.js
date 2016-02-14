import LocalStorage from '../helpers/local-storage-helper';

const LS_KEY_POSITION = 'POSITION';

let _chessHelperInstance = null;

/**
 * ChessHelper class
 */
export default class ChessHelper
{
    /**
     * ChessHelper constructor
     */
    constructor () {
        return {
            calculatePotentialPlaces,
            canMoveHere,

            savePosition,
            getSavedPosition
        };

        /**
         * Calculate all places a piece can be moved to
         * @param {Number} row
         * @param {Number} column
         */
        function calculatePotentialPlaces (row, column) {

            // TODO use Math.pow here
            return [
                `${row + 1}|${column + 2}`,
                `${row - 1}|${column + 2}`,
                `${row - 1}|${column - 2}`,
                `${row + 1}|${column - 2}`,
                `${row + 2}|${column + 1}`,
                `${row - 2}|${column + 1}`,
                `${row - 2}|${column - 1}`,
                `${row + 2}|${column - 1}`
            ];
        }

        /**
         * Check if the piece can be moved to this position
         * @param {Number} fromRow
         * @param {Number} fromColumn
         * @param {Number} toRow
         * @param {Number} toColumn
         */
        function canMoveHere (fromRow, fromColumn, toRow, toColumn) {
            const indexToFind = `${toRow}|${toColumn}`;

            return calculatePotentialPlaces(fromRow, fromColumn)
                    .indexOf(indexToFind) > -1;
        }

        /**
         * Save the position of the piece to LocalStorage
         * @param {Number} row
         * @param {Number} column
         */
        function savePosition (row, column) {
            LocalStorage.put(LS_KEY_POSITION, `${row}|${column}`);
        }

        /**
         * Get the saved position of the piece from the LocalStorage
         * @returns {{row: number, column: number}}
         */
        function getSavedPosition () {
            const savedResult = LocalStorage.get(LS_KEY_POSITION);

            if (savedResult && savedResult.indexOf('|') > -1) {
                return {
                    row: Number(savedResult.split('|')[0]),
                    column: Number(savedResult.split('|')[1])
                };
            }

            return { row: 0, column: 0 };
        }
    }

    /**
     * Singleton
     * @static
     * @returns {*}
     */
    static getInstance () {
        if (_chessHelperInstance === null) {
            _chessHelperInstance = new ChessHelper();
        }

        return _chessHelperInstance;
    }
}
