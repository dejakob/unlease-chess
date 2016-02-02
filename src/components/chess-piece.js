import * as React from 'react';

/**
 * ChessPiece class
 */
export default class ChessPiece extends React.Component
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
        const size = '50px';
        const style = {
            height: size,
            width: size,
            borderRadius: '50% 50%',
            backgroundColor: '#ff0000'
        };

        return (
            <div style={style}></div>
        );
    }
}
