import * as React from 'react';

/**
 * The ChessField class
 */
export default class ChessField extends React.Component
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
        // TODO default value with constants
        const background = this.props.background;
        const height = '50px';
        const width = '50px';
        const float = 'left';

        const style = {
            background, height, width, float
        };

        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}
