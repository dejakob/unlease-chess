import '../unmock/dragging-actions.unmock';
import DraggingActions from '../../src/actions/dragging-actions';

describe('DraggingActions', () => {
    describe('changeDragging method', () => {
        it('should be defined', () => {
            expect(DraggingActions.changeDragging).toBeDefined();
        });
    });
});
