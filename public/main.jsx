//all rendering takes place here
var React = require('react');
var ReactDOM = require('react-dom');

console.log("FROM JSX");


var CARDS = [
    { name: 'Backbone.js', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'AngularJS', img: './imgs/example.png', tags: ["AngularJS"]},
    { name: 'jQuery', img: './imgs/example.png', tags: ["jQuery"]},
    { name: 'Test', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Test2.js', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Test4', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Testing', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Teest', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'LIVWEL.js', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'AIDS', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'CLEAR', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Testing', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Week.js', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Mark', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Tony', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'Jake', img: './imgs/example.png', tags: ["Backbone.js"]},
    { name: 'React', img: './imgs/example.png', tags: ["Backbone.js"]}
];
console.log(CARDS[0].tags);

//var Test = require('./components/test.jsx');
var Cards = require('./components/cards.jsx');

//ReactDOM.render(<Test />, test);
ReactDOM.render(<Cards cards={CARDS}/>, cards);