import * as React from 'react';
import DraggingStore from '../stores/dragging-store';

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
        DraggingStore.getInstance().addCursorPositionWatcher(this._cursorPositionChanged.bind(this));
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
        // TODO default value with constants
        let background = this.props.background;
        const height = `${this.props.size}px`;
        const width = `${this.props.size}px`;
        const float = 'left';

        if (typeof this.state === 'object' && this.state !== null && this.state.active === true) {
            background = 'green';
        }

        console.log('STATE', this.props.row, this.props.column, this.state);

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
        const top = this.props.row * this.props.size;
        const left = this.props.column * this.props.size;
        const bottom = top + this.props.size;
        const right = left + this.props.size;
        const active = position.x > left &&
            position.x < right &&
            position.y > top &&
            position.y < bottom;

        this.setState({ active });
    }
}
