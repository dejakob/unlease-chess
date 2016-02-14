import * as React from 'react';
import ChessField from './chess-field';
import ChessPiece from './chess-piece';
import Actions from '../actions/dragging-actions';
import DraggingStore from '../stores/dragging-store';
import If from './react-if';
import { STYLE } from '../constants/style';

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
        DraggingStore
            .getInstance()
            .addIsDraggingWatcher(this._draggingStateChanged);
    }

    /**
     * Just before deactivating the component
     */
    componentWillUnmount () {
        DraggingStore
            .getInstance()
            .removeIsDraggingWatcher(this._draggingStateChanged);
    }

    /**
     * Render the component
     */
    render () {
        const size = `${STYLE.CHESS_FIELD.SIZE * 16}px`;
        const style = {
            height: size,
            width: size,
            border: '1px #000000 solid'
        };
        const fields = [];

        for (let i = 0; i < Math.pow(16, 2); i++) {
            const row = Math.floor(i / 16);
            const column = i % 16;
            const background = (
                row % 2 > 0 && column % 2 > 0 ||
                row % 2 === 0 && column % 2 === 0
            ) ?
                STYLE.CHESS_FIELD.COLORS.LIGHT :
                STYLE.CHESS_FIELD.COLORS.DARK;
            const fieldKey = `field${i}`;
            const hasPiece = DraggingStore.getInstance().getCurrentField()[0] === row &&
                DraggingStore.getInstance().getCurrentField()[1] === column;

            fields.push(
                <ChessField
                  background={ background }
                  key={ fieldKey }
                  row={ row }
                  column={ column }
                  size={ STYLE.CHESS_FIELD.SIZE }
                >
                    <If condition={ hasPiece }>
                        <ChessPiece />
                    </If>
                </ChessField>
            );
        }

        return (
            <div
              style={style}
              onMouseUp={ this._onMouseUp }
            >
                { fields }
            </div>
        );
    }

    /**
     * Start the dragging
     * @private
     */
    _draggingStateChanged (isDragging) {
        // TODO: move this to store and get isDragging with getter
        // When doing that, binds can be removed from listeners
        this._isDragging = isDragging;
    }

    /**
     * Mouse up on chess board
     * @private
     */
    _onMouseUp () {
        Actions.changeDragging(false);
    }
}
