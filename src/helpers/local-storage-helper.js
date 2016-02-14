export default class LocalStorageHelper
{
    /**
     * Check if the current browser supports local storage
     * @returns {Boolean}
     */
    static isSupportedByBrowser () {
        return typeof window.localStorage !== 'object' || window.localStorage !== null;
    }

    /**
     * Get a value by its key from the local storage
     * @param {String} key
     */
    static get (key) {
        if (!LocalStorageHelper.isSupportedByBrowser()) {
            throw new Error('Local Storage is not supported in this browser');
        }

        if (typeof key !== 'string') {
            throw new Error('Please enter a valid key to get data from the local storage');
        }

        return window.localStorage.getItem(key);
    }

    /**
     * Put something into the local storage
     * @param {String} key
     * @param {String} value
     */
    static put (key, value) {
        if (!LocalStorageHelper.isSupportedByBrowser()) {
            throw new Error('Local Storage is not supported in this browser');
        }

        if (typeof key !== 'string') {
            throw new Error('Please enter a valid key to set data to the local storage');
        }

        if (typeof value !== 'string') {
            throw new Error('Please enter a valid string to save into the local storage');
        }

        window.localStorage.setItem(key, value);
    }
}
