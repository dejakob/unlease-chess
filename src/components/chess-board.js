import * as React from 'react';
import ChessField from './chess-field';
import ChessPiece from './chess-piece';

/**
 * The ChessBoard class
 */
export default class ChessBoard extends React.Component
{
    /**
     * When the component gets activated
     */
    componentDidMount () {

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
        const size = `${50 * 16}px`;
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
                '#ffffff' :
                '#000000';
            const fieldKey = `field${i}`;

            if (row === 0 && column === 0) {
                fields.push(
                    <ChessField background={background} key={fieldKey}>
                        <ChessPiece />
                    </ChessField>
                );
            }
            else {
                fields.push(
                    <ChessField background={background} key={fieldKey} />
                );
            }
        }

        return (
            <div style={style}>
                { fields }
            </div>
        );
    }
}
