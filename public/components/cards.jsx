var React = require("react");
var ReactDOM = require("react-dom");
var Modal = require("react-modal");
var ReactBootstrap = require("react-bootstrap");
var Grid = ReactBootstrap.Grid;
var Col = ReactBootstrap.Col;
var Thumbnail = ReactBootstrap.Thumbnail;

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
  getInitialState: function() {
    return { 
      modalIsOpen: false
    };
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  render: function() {
    return (
       <div>
       <Col xs={6} md={3} >
        <br></br>

        <Thumbnail src={this.props.card.img} alt="242x200" onClick = {this.openModal}>
          <h3>{this.props.card.name}</h3>
          <p>Description</p>
        </Thumbnail>
         
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles} >
            <h2>
              {this.props.card.name}
            </h2>
            <img src = {this.props.card.img} /> <br></br>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
          </Modal>
        </Col>
      </div>
    );
  }
});
var CardContainer = React.createClass({
  render: function() {
      var rows = [];
      this.props.cards.forEach(function(card) {
        if(card.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
          return;
        }
        rows.push(<Card card={card} key={card.name} />);
      }.bind(this));
      return (  
       <div>
        <Grid>
          {rows}
        </Grid>
        </div>
       
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