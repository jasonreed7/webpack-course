const React = require('react');
const ReactDOM = require('react-dom');

const SSR = <div onClick={() => alert('hello')}>Hello world?</div>;

if (typeof document === 'undefined') {
	module.exports = SSR;
} else {
	ReactDOM.render(SSR, document.getElementById('app'));
}