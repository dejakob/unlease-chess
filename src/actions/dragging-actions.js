import AppDispatcher from '../dispatcher/app-dispatcher';

export default {
    /**
     * Change isDragging
     * @param {Boolean} isDragging
     */
    changeDragging (isDragging) {
        AppDispatcher.getInstance().handleViewAction({
            // TODO constant
            actionType: 'isDraggingChanged',
            isDragging
        });
    },

    /**
     * Change the cursor position
     * @param {Object} position
     */
    changeCursorPosition (position) {
        AppDispatcher.getInstance().handleViewAction({
            // TODO constant
            actionType: 'cursorPositionChanged',
            position
        });
    }
}