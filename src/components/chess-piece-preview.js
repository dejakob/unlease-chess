import * as React from 'react';
import ChessPiece from './chess-piece';
import DraggingStore from '../stores/dragging-store';
import { STYLE } from '../constants/style';

/**
 * ChessPiecePreview class
 */
export default class ChessPiecePreview extends ChessPiece
{
    /**
     * constructor for ChessPiecePreview
     */
    constructor () {
        super();
        this.state = DraggingStore.getInstance().getCurrentPosition();
    }

    /**
     * When the component mounts
     */
    componentDidMount () {
        DraggingStore
            .getInstance()
            .addCursorPositionWatcher(this._onCursorPositionChanged.bind(this));
    }

    /**
     * Before the component unmounts
     */
    componentWillUnmount () {
        DraggingStore
            .getInstance()
            .removeCursorPositionWatcher(this._onCursorPositionChanged.bind(this));
    }

    /**
     * Render the preview
     * @returns {XML}
     */
    render () {
        const style = {
            position: 'absolute',
            top: `${this.state.y}px`,
            left: `${this.state.x}px`,
            marginTop: `-${STYLE.CHESS_FIELD.SIZE / 2}px`,
            marginLeft: `-${STYLE.CHESS_FIELD.SIZE / 2}px`,
            opacity: '0.5'
        };

        return (
            <div style={style}>
                {super.render()}
            </div>
        );
    }

    /**
     * When the position of the cursor changes over the board
     * @param {Object} position
     * @private
     */
    _onCursorPositionChanged (position) {
        this.setState(position);
    }
}
