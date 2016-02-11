import AppDispatcher from '../dispatcher/app-dispatcher';

import {
    ACTION_CURSOR_POSITION_CHANGED,
    ACTION_IS_DRAGGING_CHANGED
} from '../constants/actions';

export default {
    /**
     * Change isDragging
     * @param {Boolean} isDragging
     */
    changeDragging (isDragging) {
        AppDispatcher.getInstance().handleViewAction({
            actionType: ACTION_IS_DRAGGING_CHANGED,
            isDragging
        });
    },

    /**
     * Change the cursor position
     * @param {Object} position
     */
    changeCursorPosition (position) {
        AppDispatcher.getInstance().handleViewAction({
            actionType: ACTION_CURSOR_POSITION_CHANGED,
            position
        });
    }
}
