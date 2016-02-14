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
     * Render the component
     */
    render () {
        const size = `${STYLE.CHESS_FIELD.SIZE * 16}px`;
        const style = {
            height: size,
            width: size,
            border: STYLE.CHESS_FIELD.BORDER
        };
        const fields = [];

        // 16 * 16: 16 rows, 16 columns
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
     * Mouse up on chess board
     * @private
     */
    _onMouseUp () {
        Actions.changeDragging(false);
    }
}
