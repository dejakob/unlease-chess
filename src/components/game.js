import * as React from 'react';
import Actions from '../actions/dragging-actions';
import ChessBoard from './chess-board';
import ChessPiecePreview from './chess-piece-preview';
import DraggingStore from '../stores/dragging-store';
import If from './react-if';

/**
 * The Game class
 */
export default class Game extends React.Component
{
    /**
     * Game constructor
     */
    constructor () {
        super();
        this.state = { showPiecePreview: false };
    }

    /**
     * When the component mounted
     */
    componentDidMount () {
        DraggingStore.getInstance()
            .addIsDraggingWatcher(this._changePreviewVisibility.bind(this));
    }

    /**
     * When the component unmounts
     */
    componentWillUnmount () {
        DraggingStore.getInstance()
            .removeIsDraggingWatcher(this._changePreviewVisibility.bind(this));
    }

    /**
     * Render the game
     */
    render () {
        return (
            <div onMouseMove={this._onMouseMove}>
                <ChessBoard />
                <If condition={this.state.showPiecePreview === true}>
                    <ChessPiecePreview />
                </If>
            </div>
        );
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
            Actions.changeCursorPosition(data);
        }
    }

    /**
     * When isDragging changes
     * @param {Boolean} showPiecePreview
     * @private
     */
    _changePreviewVisibility (showPiecePreview) {
        this.setState({ showPiecePreview });
    }
}
