import { React, Component } from 'React';
import ChessBoard from './chess-board';

/**
 * The Game class
 */
export default class Game extends Component
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
