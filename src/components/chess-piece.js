import * as React from 'react';
import Actions from '../actions/dragging-actions';
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
        const size = '40px';
        const style = {
            height: size,
            width: size,
            borderRadius: '50% 50%',
            background: STYLE.CHESS_PIECE.BACKGROUND,
            backgroundPosition: 'center center',
            border: '1px #000000 solid',
            margin: '5px'
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
        Actions.changeDragging(true);
    }

    /**
     * on mouse up on the chess piece
     * @private
     */
    _onMouseUp () {
        Actions.changeDragging(false);
    }
}
