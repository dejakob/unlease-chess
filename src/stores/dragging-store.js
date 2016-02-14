import EventEmitter from 'event-emitter';
import AppDispatcher from '../dispatcher/app-dispatcher';
import ChessHelper from '../helpers/chess-helper';

import {
    ACTION_CURSOR_POSITION_CHANGED,
    ACTION_IS_DRAGGING_CHANGED
} from '../constants/actions';

let _draggingStoreInstance = null;

/**
 * DraggingStore class
 */
export default class DraggingStore extends EventEmitter
{
    /**
     * Constructor
     */
    constructor () {
        super();
        const vm = this;
        const lastSavedPosition = ChessHelper.getInstance().getSavedPosition();

        vm._isDragging = false;
        vm._position = { top: 0, left: 0 };
        vm._currentField = [lastSavedPosition.row, lastSavedPosition.column];

        vm.getIsDragging = getIsDragging;
        vm.getCurrentPosition = getCurrentPosition;
        vm.getCurrentField = getCurrentField;
        vm.setCurrentField = setCurrentField;
        vm.emitDraggingChange = emitDraggingChange;
        vm.emitCursorPositionChange = emitCursorPositionChange;
        vm.addIsDraggingWatcher = addIsDraggingWatcher;
        vm.addCursorPositionWatcher = addCursorPositionWatcher;
        vm.removeIsDraggingWatcher = removeIsDraggingWatcher;
        vm.removeCursorPositionWatcher = removeCursorPositionWatcher;
        vm.dispatcherIndex = registerDispatcher();

        return vm;

        /**
         * Emit dragging change
         * @param {Object} position
         */
        function emitCursorPositionChange (position) {
            vm._position = position;
            vm.emit(ACTION_CURSOR_POSITION_CHANGED, position);
        }

        /**
         * Get the dragging state
         * @returns {Boolean}
         */
        function getIsDragging () {
            return vm._isDragging;
        }

        /**
         * @returns {Object}
         */
        function getCurrentPosition () {
            return vm._position;
        }

        /**
         * Get the current field row and column
         * @returns {Array.<Number>}
         */
        function getCurrentField () {
            return vm._currentField;
        }

        /**
         * Set the current field row and column
         * @param {Array.<Number>} field
         */
        function setCurrentField (field) {
            vm._currentField = field;
        }

        /**
         * Emit dragging change
         * @param {Boolean} isDragging
         */
        function emitDraggingChange (isDragging) {
            vm._isDragging = isDragging;
            vm.emit(ACTION_IS_DRAGGING_CHANGED, isDragging);
        }

        /**
         * @param {Function} callback
         */
        function addIsDraggingWatcher (callback) {
            vm.on(ACTION_IS_DRAGGING_CHANGED, callback);
        }

        /**
         * Remove the dragging listener
         * @param {Function} callback
         */
        function removeIsDraggingWatcher (callback) {
            vm.off(ACTION_IS_DRAGGING_CHANGED, callback);
        }

        /**
         * @param {Function} callback
         */
        function addCursorPositionWatcher (callback) {
            vm.on(ACTION_CURSOR_POSITION_CHANGED, callback);
        }

        /**
         * @param {Function} callback
         */
        function removeCursorPositionWatcher (callback) {
            vm.off(ACTION_CURSOR_POSITION_CHANGED, callback);
        }

        /**
         *
         */
        function registerDispatcher () {
            AppDispatcher.getInstance().register(payload => {
                const action = payload.action;

                // TODO constants
                switch (action.actionType) {

                case ACTION_CURSOR_POSITION_CHANGED:
                    emitCursorPositionChange(action.position);
                    break;

                case ACTION_IS_DRAGGING_CHANGED:
                    emitDraggingChange(action.isDragging);
                    break;
                }

                return true;
            });
        }
    }

    /**
     * Singleton
     * @returns {DraggingStore}
     */
    static getInstance () {
        if (_draggingStoreInstance === null) {
            _draggingStoreInstance = new DraggingStore();
        }

        return _draggingStoreInstance;
    }
}
