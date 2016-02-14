// TODO all

// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import TestUtils from 'react-addons-test-utils';
//
// import '../unmock/chess-field.unmock.js';
// import ChessField from '../../src/components/chess-field';
// import DraggingStore from '../../src/stores/dragging-store';
//
// const draggingStoreInstance = DraggingStore.getInstance();
//
// xdescribe('ChessField component', () => {
//     it('should be defined', () => {
//         expect(ChessField).toBeDefined();
//     });
//
//     describe('without children', () => {
//         let element = null;
//         let background = '#ff0000';
//         let row = 0;
//         let column = 0;
//
//         beforeEach(() => {
//             spyOn(draggingStoreInstance, 'addCursorPositionWatcher').andCallFake(() => {});
//
//             element = TestUtils.renderIntoDocument(
//                 <ChessField
//                     background={background}
//                     row={row}
//                     column={column}
//                 />
//             );
//         });
//
//         it('should add a cursor position watcher', () => {
//             expect(draggingStoreInstance.addCursorPositionWatcher)
//                 .toHaveBeenCalledWith(draggingStoreInstance._cursorPositionChanged.bind(draggingStoreInstance));
//         });
//     });
// });
//