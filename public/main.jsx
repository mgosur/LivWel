//all rendering takes place here
var React = require('react');
var ReactDOM = require('react-dom');

console.log("FROM JSX");


var CARDS = [
    { name: 'Backbone.js', img: './imgs/example.png'},
    { name: 'AngularJS', img: './imgs/example.png'},
    { name: 'jQuery', img: './imgs/example.png'},
    { name: 'Test', img: './imgs/example.png'},
    { name: 'Test2.js', img: './imgs/example.png'},
    { name: 'Test4', img: './imgs/example.png'},
    { name: 'Testing', img: './imgs/example.png'},
    { name: 'Teest', img: './imgs/example.png'},
    { name: 'LIVWEL.js', img: './imgs/example.png'},
    { name: 'AIDS', img: './imgs/example.png'},
    { name: 'CLEAR', img: './imgs/example.png'},
    { name: 'Test', img: './imgs/example.png'},
    { name: 'Week.js', img: './imgs/example.png'},
    { name: 'Mark', img: './imgs/example.png'},
    { name: 'Tony', img: './imgs/example.png'},
    { name: 'Jake', img: './imgs/example.png'},
    { name: 'React', img: './imgs/example.png'}
];

//var Test = require('./components/test.jsx');
var Cards = require('./components/cards.jsx');

//ReactDOM.render(<Test />, test);
ReactDOM.render(<Cards cards={CARDS}/>, cards);