import * as React from 'react';
import DraggingStore from '../stores/dragging-store';
import ChessHelper from '../helpers/chess-helper';
import { STYLE } from '../constants/style';

/**
 * The ChessField class
 */
export default class ChessField extends React.Component
{
    /**
     * When the component gets activated
     */
    componentDidMount () {
        // TODO prop validation
        this.originalBackground = this.props.background;
        this.top = this.props.row * this.props.size;
        this.left = this.props.column * this.props.size;
        this.bottom = this.top + this.props.size;
        this.right = this.left + this.props.size;

        DraggingStore.getInstance()
            .addCursorPositionWatcher(this._cursorPositionChanged.bind(this));
        DraggingStore.getInstance()
            .addIsDraggingWatcher(this._isDraggingChanged.bind(this));
    }

    /**
     * Just before deactivating the component
     */
    componentWillUnmount () {
        DraggingStore.getInstance()
            .removeCursorPositionWatcher(this._cursorPositionChanged.bind(this));
        DraggingStore.getInstance()
            .removeIsDraggingWatcher(this._isDraggingChanged.bind(this));
    }

    /**
     * @param {Object} position
     * @private
     */
    _cursorPositionChanged (position) {
        const hasHover = position.x > this.left &&
            position.x < this.right &&
            position.y > this.top &&
            position.y < this.bottom;
        const currentRow = DraggingStore.getInstance().getCurrentField()[0];
        const currentColumn = DraggingStore.getInstance().getCurrentField()[1];

        if (
            hasHover &&
            ChessHelper.getInstance()
                .canMoveHere(currentRow, currentColumn, this.props.row, this.props.column)
        ) {
            this.setState({ active: true });
        }
        else {
            this.setState({ active: false });
        }
    }

    /**
     * @param {Boolean} isDragging
     * @private
     */
    _isDraggingChanged (isDragging) {
        if (isDragging === false) {
            if (this.state.active) {
                DraggingStore.getInstance().setCurrentField([
                    this.props.row, this.props.column
                ]);
            }

            this.setState({ active: false });
        }
    }

    /**
     * Render the component
     */
    render () {
        let background = this.props.background;
        const height = `${this.props.size}px`;
        const width = `${this.props.size}px`;
        const float = 'left';

        if (
            typeof this.state === 'object' &&
            this.state !== null &&
            this.state.active === true
        ) {
            background = STYLE.CHESS_FIELD.COLORS.ACTIVE;
        }

        const style = {
            background, height, width, float
        };

        return (
            <div
              style={ style }
            >
                {this.props.children}
            </div>
        );
    }
}
