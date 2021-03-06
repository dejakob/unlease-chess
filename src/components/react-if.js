import * as React from 'react';

export default class ReactIf extends React.Component
{
    /**
     * Render method of the if component
     * @returns {Object}
     */
    render () {
        if (
            typeof this.props.condition !== 'boolean' ||
            typeof this.props.children !== 'object' ||
            this.props.children === null
        ) {
            throw new Error('Please provide a condition and result');
        }

        if (this.props.condition) {
            return this.props.children;
        }

        return null;
    }
}