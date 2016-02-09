import * as React from 'react';
import ChessPiece from './chess-piece';
import DraggingStore from '../stores/dragging-store';

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

        this.state = { x: 0, y: 0 };
    }

    /**
     * When the component mounts
     */
    componentDidMount () {
        DraggingStore.getInstance()
            .addCursorPositionWatcher(this._onCursorPositionChanged.bind(this));
    }

    /**
     * Before the component unmounts
     */
    componentWillUnmount () {
        DraggingStore.getInstance()
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
            marginTop: '-25px',
            marginLeft: '-25px',
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
     * @param position
     * @private
     */
    _onCursorPositionChanged (position) {
        this.setState(position);
    }
}
