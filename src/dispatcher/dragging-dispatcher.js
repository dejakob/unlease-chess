import { Dispatcher } from 'flux';

/**
 * DraggingDispatcher class
 */
export default class DraggingDispatcher extends Dispatcher
{
    /**
     * When a draggingDispatcher gets created
     */
    constructor () {
        super();
        this._callbacks = [];
    }

    dispatch () {
        this._callbacks.forEach(callback => callback());
    }

    register (callback) {
        if (typeof callback !== 'function') {
            throw new Error('Please provide a valid callback to register the dispatcher');
        }

        this._callbacks.push(callback);
    }

    /**
     * Remove a callback from the collection
     * @param {Function} callback
     */
    unregister (callback) {
        this._callbacks.splice(this._callbacks.indexOf(callback), 1);
    }
}
