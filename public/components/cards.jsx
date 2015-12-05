var React = require("react");
var ReactDOM = require("react-dom");
var Modal = require("react-modal");
var ReactBootstrap = require("react-bootstrap");
// var Grid = ReactBootstrap.Grid;
// var Row = ReactBootstrap.Row;
// var Col = ReactBootstrap.Col;
// var Thumbnail = ReactBootstrap.Thumbnail;
// var Button = ReactBootstrap.Button;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '95%',
    width                 : '95%'
  }
};

var SearchBarContainer = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
            </form>
        );
    }
});
var MainContainer = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    };
  },
  handleSearchInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },
  render: function(){
      return (
        <div>
           <SearchBarContainer />
          <CardContainer cards = {this.props.cards} />
        </div>
      );
    }
});
var Card = React.createClass ({
  render: function() {
    return (
      <tr>
        <td>{this.props.card.name}</td>
      </tr>
    );
  }
});
var CardContainer = React.createClass({
  render: function() {
      var rows = [];
      this.props.cards.forEach(function(card) {
        rows.push(<Card card={card} key={card.name} />);
      });
      return (  
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      )
  }
});

// module.exports = MainContainer;
var CARDS = [
    { name: 'Backbone.js', img: './imgs/example.png'},
    { name: 'AngularJS', img: './imgs/example.png'},
    { name: 'jQuery', url: './imgs/example.png'},
    { name: 'Prototype', url: './imgs/example.png'},
    { name: 'React', url: './imgs/example.png'}
];

ReactDOM.render(<MainContainer cards={CARDS}/>, cards);