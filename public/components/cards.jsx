var React = require("react");
var ReactDOM = require("react-dom");
var Modal = require("react-modal");
var ReactBootstrap = require("react-bootstrap");

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
        if(card.name.indexOf(this.props.filterText) === -1) {
          return;
        }
        rows.push(<Card card={card} key={card.name} />);
      }.bind(this));
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
var SearchBarContainer = React.createClass({
    handleChange : function() {
      this.props.onSearchInput(this.refs.filterTextInput.value);
    },
    render : function() {
        return (
            <form>
                <input 
                  type="text" 
                  placeholder="Search.." 
                  value={this.props.filterText} 
                  ref="filterTextInput"
                  onChange={this.handleChange}
                />
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
           <SearchBarContainer filterText = {this.state.filterText} onSearchInput = {this.handleSearchInput}/>
          <CardContainer cards = {this.props.cards} filterText = {this.state.filterText} />
        </div>
      );
    }
});

module.exports = MainContainer;