import '../unmock/local-storage-helper.unmock.js';
import LocalStorageHelper from '../../src/helpers/local-storage-helper';

describe('LocalStorage Helper', () => {
    beforeEach(() => {
        window.localStorage = {
            getItem: () => {},
            setItem: () => {}
        };
    });

    it('should be defined', () => {
        expect(LocalStorageHelper).toBeDefined();
    });

    describe('isSupportedByBrowser method', () => {
        it('should be defined', () => {
            expect(LocalStorageHelper.isSupportedByBrowser).toBeDefined();
        });

        it('should be true when the browser supports localStorage', () => {
            expect(LocalStorageHelper.isSupportedByBrowser()).toBeTruthy();
        });
    });

    describe('get method', () => {
        it('should be defined', () => {
            expect(LocalStorageHelper.get).toBeDefined();
        });

        it('should throw an error when the key given was no string', () => {
            expect(() => LocalStorageHelper.get(null))
                .toThrow('Please enter a valid key to get data from the local storage');
        });

        it('should get the data from localStorage', () => {
            const TEST_VALUE = 'test';
            spyOn(localStorage, 'getItem').andReturn(TEST_VALUE);
            expect(LocalStorageHelper.get('key')).toBe(TEST_VALUE);
        });
    });

    describe('put method', () => {
        it('should be defined', () => {
            expect(LocalStorageHelper.put).toBeDefined();
        });

        it('should throw an error when the key given was no string', () => {
            expect(() => LocalStorageHelper.put(null))
                .toThrow('Please enter a valid key to set data to the local storage');
        });

        it('should throw an error when the value given was no string', () => {
            expect(() => LocalStorageHelper.put('test', null))
                .toThrow('Please enter a valid string to save into the local storage');
        });

        it('should set the data to LocalStorage', () => {
            spyOn(localStorage, 'setItem').andCallFake(() => {});
            LocalStorageHelper.put('key', 'data');
            expect(localStorage.setItem).toHaveBeenCalledWith('key', 'data');
        });
    });
});