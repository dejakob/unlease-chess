import { Dispatcher } from 'flux';

let _appDispatcherInstance = null;

/**
 * App dispatcher class
 */
export default class AppDispatcher extends Dispatcher
{
    constructor () {
        super();
        const vm = this;

        this.handleViewAction = handleViewAction;

        return this;

        /**
         * Handle the view action
         * @param {Object} action
         */
        function handleViewAction (action) {
            console.log('HANDLE VIEW ACTION', action);

            vm.dispatch({
                source: 'VIEW_ACTION',
                action
            });
        }
    }

    /**
     * Singleton
     */
    static getInstance () {
        if (_appDispatcherInstance === null) {
            _appDispatcherInstance = new AppDispatcher();
        }

        return _appDispatcherInstance;
    }
}
