import * as React from 'react';
import ChessBoard from './chess-board';

/**
 * The Game class
 */
export default class Game extends React.Component
{
    /**
     * Render the game
     */
    render () {
        return (
            <div>
                <ChessBoard />
            </div>
        );
    }
}
