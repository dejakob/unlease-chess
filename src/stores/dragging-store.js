import DraggingDispatcher from '../dispatcher/dragging-dispatcher';
import EventEmitter from 'event-emitter';

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

        return {
            _draggingDispatcher: new DraggingDispatcher(),
            _isDragging: false,

            getIsDragging,
            emitDraggingChange,
            emitCursorPositionChange,
            addIsDraggingWatcher,
            addCursorPositionWatcher,
            removeChangeListener,
            dispatcherIndex
        };

        /**
         * Emit dragging change
         * @param {Object} position
         */
        function emitCursorPositionChange (position) {
            vm.emit(IS_DRAGGING_CHANGED, position);
        }

        /**
         * Get the dragging state
         * @returns {Boolean}
         */
        function getIsDragging () {
            return this._isDragging;
        }

        /**
         * Emit dragging change
         * @param {Boolean} isDragging
         */
        function emitDraggingChange (isDragging) {
            this._isDragging = isDragging;
            vm.emit(IS_DRAGGING_CHANGED, isDragging);
        }

        /**
         * @param {Function} callback
         */
        function addIsDraggingWatcher (callback) {
            vm.on(IS_DRAGGING_CHANGED, callback);
        }

        /**
         *
         * @param {Function} callback
         */
        function addCursorPositionWatcher (callback) {
            vm.on(CURSOR_POSITION_CHANGED, callback);
        }

        /**
         * @param {Function} callback
         */
        function removeChangeListener (callback) {
            vm.removeListener(IS_DRAGGING_CHANGED, callback);
        }

        /**
         * Register the dispatcher
         */
        function dispatcherIndex () {
            vm._draggingDispatcher.register(isDragging => this._isDragging = isDragging);
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
