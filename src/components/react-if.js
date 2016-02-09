import * as React from 'react';

export default class ReactIf extends React.Component
{
    /**
     * Render method of the if component
     * @returns {*}
     */
    render () {
        if (
            typeof this.props.condition !== 'boolean' ||
            typeof this.props.children !== 'object'
        ) {
            throw new Error('Please provide a condition and result');
        }

        const style = {
            display: this.props.condition === true ? 'block' : 'none'
        };

        if (this.props.condition) {
            return this.props.children;
        }

        return null;
    }
}