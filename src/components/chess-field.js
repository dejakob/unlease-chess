import * as React from 'react';
import DraggingStore from '../stores/dragging-store';
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
     * Render the component
     */
    render () {
        // TODO default value with constants
        let background = this.props.background;
        const height = `${this.props.size}px`;
        const width = `${this.props.size}px`;
        const float = 'left';

        if (typeof this.state === 'object' && this.state !== null && this.state.active === true) {
            background = STYLE.CHESS_FIELD.COLORS.ACTIVE;
        }

        const style = {
            background, height, width, float
        };

        return (
            <div style={ style }>
                {this.props.children}
            </div>
        );
    }

    /**
     *
     * @param position
     * @private
     */
    _cursorPositionChanged (position) {
        const active = position.x > this.left &&
            position.x < this.right &&
            position.y > this.top &&
            position.y < this.bottom;

        this.setState({ active });
    }

    /**
     *
     * @param {Boolean} isDragging
     * @private
     */
    _isDraggingChanged (isDragging) {
        if (isDragging === false) {
            this.setState({ active: false });
        }
    }
}
