import * as React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

console.log('react', React);
console.log('Game', Game);
console.log('DOM', ReactDOM);

ReactDOM.render(
    <Game />,
    document.querySelector('main')
);
