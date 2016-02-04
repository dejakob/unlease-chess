import * as React from 'react';
import DraggingStore from '../stores/dragging-store';
import { STYLE } from '../constants/style';

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
            background: STYLE.CHESS_PIECE.BACKGROUND
        };

        return (
            <div style={ style }
                 onMouseDown={ this._onMouseDown }
                 onMouseUp={ this._onMouseUp }
            ></div>
        );
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
