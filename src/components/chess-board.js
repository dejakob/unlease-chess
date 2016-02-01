import * as React from 'react';
import ChessField from './chess-field';

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
        const fields = [];

        for (let i = 0; i < 16; i++) {
            const background = i % 2 === 0 ? '#ffffff' : '#000000';
            const fieldKey = `field${i}`;

            fields.push(
                <ChessField background={background} key={fieldKey} />
            );
        }

        return (
            <div>
                { fields }
            </div>
        );
    }
}
