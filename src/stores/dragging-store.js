import DraggingDispatcher from '../dispatcher/dragging-dispatcher';
import EventEmitter from 'event-emitter';
import AppDispatcher from '../dispatcher/app-dispatcher';

const IS_DRAGGING_CHANGED = 'isDraggingChanged';
const CURSOR_POSITION_CHANGED = 'cursorPositionChanged';
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

        vm._draggingDispatcher = new DraggingDispatcher();
        vm._isDragging = false;
        vm._position = { top: 0, left: 0 };
        vm._currentField = [0, 0];

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

        return this;

        /**
         * Emit dragging change
         * @param {Object} position
         */
        function emitCursorPositionChange (position) {
            vm._position = position;
            vm.emit(CURSOR_POSITION_CHANGED, position);
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
         * @returns {*}
         */
        function getCurrentField () {
            return vm._currentField;
        }

        /**
         *
         * @param field
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
            vm.emit(IS_DRAGGING_CHANGED, isDragging);
        }

        /**
         * @param {Function} callback
         */
        function addIsDraggingWatcher (callback) {
            console.log('add is dragging watcher');

            vm.on(IS_DRAGGING_CHANGED, callback);
        }

        /**
         * Remove the dragging listener
         * @param {Function} callback
         */
        function removeIsDraggingWatcher (callback) {
            vm.off(IS_DRAGGING_CHANGED, callback);
        }

        /**
         * @param {Function} callback
         */
        function addCursorPositionWatcher (callback) {
            vm.on(CURSOR_POSITION_CHANGED, callback);
        }

        /**
         * @param {Function} callback
         */
        function removeCursorPositionWatcher (callback) {
            vm.off(CURSOR_POSITION_CHANGED, callback);
        }

        /**
         *
         */
        function registerDispatcher () {
            AppDispatcher.getInstance().register(payload => {
                const action = payload.action;

                // TODO constants
                switch (action.actionType) {

                case CURSOR_POSITION_CHANGED:
                    emitCursorPositionChange(action.position);
                    break;

                case IS_DRAGGING_CHANGED:
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
