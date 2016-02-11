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
            canMoveHere
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
