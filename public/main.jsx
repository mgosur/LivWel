//all rendering takes place here
var React = require('react');
var ReactDOM = require('react-dom');

console.log("FROM JSX");


var CARDS = [
    { name: 'Backbone.js', img: './imgs/example.png'},
    { name: 'AngularJS', img: './imgs/example.png'},
    { name: 'jQuery', url: './imgs/example.png'},
    { name: 'Prototype', url: './imgs/example.png'},
    { name: 'React', url: './imgs/example.png'}
];

//var Test = require('./components/test.jsx');
var Cards = require('./components/cards.jsx');

//ReactDOM.render(<Test />, test);
ReactDOM.render(<Cards cards={CARDS}/>, cards);