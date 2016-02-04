import * as React from 'react';
import DraggingStore from '../stores/dragging-store';

/**
 * ChessPiece class
 */
export default class ChessPiece extends React.Component
{
    /**
     * When the component gets activated
     */
    componentDidMount () {
        this._isDragging = false;
        DraggingStore.getInstance().addCursorPositionWatcher(this._cursorPositionChanged);
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
        const size = '50px';
        const style = {
            height: size,
            width: size,
            borderRadius: '50% 50%',
            backgroundColor: '#ff0000'
        };

        return (
            <div style={ style }
                 onMouseDown={ this._onMouseDown }
                 onMouseUp={ this._onMouseUp }
            ></div>
        );
    }

    /**
     *
     * @param position
     * @private
     */
    _cursorPositionChanged (position) {

    }

    /**
     * on mouse down on the chess piece
     * @private
     */
    _onMouseDown () {
        DraggingStore.getInstance().emitDraggingChange(true);
    }

    /**
     * on mouse up on the chess piece
     * @private
     */
    _onMouseUp () {
        DraggingStore.getInstance().emitDraggingChange(false);
    }
}
