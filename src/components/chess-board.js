import * as React from 'react';
import ChessField from './chess-field';
import ChessPiece from './chess-piece';
import DraggingStore from '../stores/dragging-store';

/**
 * The ChessBoard class
 */
export default class ChessBoard extends React.Component
{
    /**
     * When the component gets activated
     */
    componentDidMount () {
        this._isDragging = false;
        DraggingStore.getInstance().addIsDraggingWatcher(this._draggingStateChanged);
    }

    /**
     * Just before deactivating the component
     */
    componentWillUnmount () {

    }

    /**
     * Render the component
     */
    render () {
        const size = `${50 * 16}px`;
        const style = {
            height: size,
            width: size,
            border: '1px #000000 solid'
        };

        const fields = [];

        // TODO clean up
        for (let i = 0; i < Math.pow(16, 2); i++) {
            const row = Math.floor(i / 16);
            const column = i % 16;
            const background = (
                row % 2 > 0 && column % 2 > 0 ||
                row % 2 === 0 && column % 2 === 0
            ) ?
                '#ffffff' :
                '#000000';
            const fieldKey = `field${i}`;

            if (row === 0 && column === 0) {
                fields.push(
                    <ChessField background={ background } key={ fieldKey }>
                        <ChessPiece />
                    </ChessField>
                );
            }
            else {
                fields.push(
                    <ChessField background={ background } key={ fieldKey } />
                );
            }
        }

        return (
            <div style={ style }
                 onMouseUp={ this._onMouseUp }
                 onMouseMove={ this._onMouseMove }>
                { fields }
            </div>
        );
    }

    /**
     * Start the dragging
     * @private
     */
    _draggingStateChanged (isDragging) {
        console.log('DRAGGING STAAART!', isDragging);

        // TODO: move this to store and get isDragging with getter
        // When doing that, binds can be removed from listeners
        this._isDragging = isDragging;
    }

    /**
     * Mouse up on chess board
     * @private
     */
    _onMouseUp () {
        DraggingStore.getInstance().emitDraggingChange(false);
    }

    /**
     * When moving the mouse over the chess board
     * @param {MouseEvent} event
     * @private
     */
    _onMouseMove (event) {
        const data = {
            x: event.clientX,
            y: event.clientY
        };

        if (DraggingStore.getInstance().getIsDragging() === true) {
            DraggingStore.getInstance().emitCursorPositionChange(data);
        }
    }
}
