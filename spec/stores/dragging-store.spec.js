import '../unmock/dragging-store.unmock.js';
import DraggingStore from '../../src/stores/dragging-store';

describe('Dragging Store', () => {
   let draggingStoreInstance = null;

   beforeEach(() => {
       draggingStoreInstance = DraggingStore.getInstance();
   });

   it('should be defined', () => {
       expect(DraggingStore).toBeDefined();
       expect(draggingStoreInstance).toBeDefined();
   });

   describe('getIsDragging method', () => {
       it('should be defined', () => {
           expect(draggingStoreInstance.getIsDragging).toBeDefined();
       });

       it('should return the value of _isDragging', () => {
           draggingStoreInstance._isDragging = true;
           expect(draggingStoreInstance.getIsDragging()).toBeTruthy();

           draggingStoreInstance._isDragging = false;
           expect(draggingStoreInstance.getIsDragging()).toBeFalsy();
       });
   });
});