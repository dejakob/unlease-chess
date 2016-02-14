import '../unmock/app-dispatcher.unmock.js';
import AppDispatcher from '../../src/dispatcher/app-dispatcher';

describe('App Dispatcher', () => {
    it('should be defined', () => {
        expect(AppDispatcher).toBeDefined();
    });

    describe('handleViewAction method', () => {
        let appDispatcherInstance = null;

        beforeEach(() => {
            appDispatcherInstance = AppDispatcher.getInstance();
            spyOn(appDispatcherInstance, 'dispatch').andCallFake(() => {});
        });

        it('should be defined', () => {
            expect(appDispatcherInstance.handleViewAction).toBeDefined();
        });

        it('should dispatch a view action', () => {
            const testAction = { action: 'action' };
            appDispatcherInstance.handleViewAction(testAction);

            expect(appDispatcherInstance.dispatch).toHaveBeenCalledWith({
                source: 'VIEW_ACTION',
                action: testAction
            });
        });
    });
});
