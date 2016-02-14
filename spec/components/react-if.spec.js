import React from 'react';
import ReactDOMServer from 'react-dom/server';
import TestUtils from 'react-addons-test-utils';

import '../unmock/react-if.unmock.js';
import If from '../../src/components/react-if';

describe('ReactIf component', () => {
    const TEST_RESULT = 'result';
    let condition = true;

    it('should be defined', () => {
        expect(If).toBeDefined();
    });

    it('should throw an error when no condition or children were defined', () => {
        let renderer = () => ReactDOMServer
            .renderToStaticMarkup(React.createElement(
                If,
                {},
                React.createElement(
                    'div',
                    {},
                    TEST_RESULT
                )
            ));
        expect(renderer).toThrow('Please provide a condition and result');

        renderer = () => ReactDOMServer
            .renderToStaticMarkup(React.createElement(
                If,
                { condition },
                null
            ));
        expect(renderer).toThrow('Please provide a condition and result');
    });

    it('should show the content when the condition is true', () => {
        const element = TestUtils
            .renderIntoDocument(React.createElement(
                If,
                { condition },
                React.createElement(
                    'div',
                    {},
                    TEST_RESULT
                )
            ));
        const result = element.props.children.props.children;
        expect(result).toBe(TEST_RESULT);
    });

    it('should not show the content when the condition is false', () => {
        const result = ReactDOMServer.renderToStaticMarkup(React.createElement(
            If,
            { condition: false },
            React.createElement(
                'div',
                {},
                TEST_RESULT
            )
        ));

        expect(result).toBe('<noscript></noscript>');
    });
});