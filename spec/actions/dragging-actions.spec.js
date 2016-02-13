import '../unmock/dragging-actions.unmock';
import DraggingActions from '../../src/actions/dragging-actions';
import AppDispatcher from '../../src/dispatcher/app-dispatcher';

import {
    ACTION_CURSOR_POSITION_CHANGED,
    ACTION_IS_DRAGGING_CHANGED
} from '../../src/constants/actions';

describe('DraggingActions', () => {
    describe('changeDragging method', () => {
        beforeEach(() => {
            spyOn(AppDispatcher.getInstance(), 'handleViewAction').andCallFake(() => {});
        });

        it('should be defined', () => {
            expect(DraggingActions.changeDragging).toBeDefined();
        });

        it('should handle the view action', () => {
            DraggingActions.changeDragging(true);
            expect(AppDispatcher.getInstance().handleViewAction).toHaveBeenCalledWith({
                actionType: ACTION_IS_DRAGGING_CHANGED,
                isDragging: true
            });
        });
    });

    describe('changeCursorPosition method', () => {
        beforeEach(() => {
            spyOn(AppDispatcher.getInstance(), 'handleViewAction').andCallFake(() => {});
        });

        it('should be defined', () => {
            expect(DraggingActions.changeCursorPosition).toBeDefined();
        });

        it('should handle the view action', () => {
            const position = { x: 10, y: 10 };

            DraggingActions.changeCursorPosition(position);
            expect(AppDispatcher.getInstance().handleViewAction).toHaveBeenCalledWith({
                actionType: ACTION_CURSOR_POSITION_CHANGED,
                position
            });
        });
    });
});
