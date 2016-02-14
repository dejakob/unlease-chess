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
        });

        it('should be defined', () => {
            expect(appDispatcherInstance.handleViewAction).toBeDefined();
        });
    });
});
