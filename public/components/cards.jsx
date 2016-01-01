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
const style = {
  sidebar: {
    position : 'absolute', 
    float: 'left',
    width: '20%'
  },
  cards: {
    position: 'absolute',
    float: 'right',
    marginLeft: '20%'
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
  addTags: function(tag) {
    console.log("addTags called!");
    this.props.onTagInput(tag, this.props.index);
  },
  keyDown: function (event){
    if (event.key == "Enter")
    {
      this.addTags(event.target.value) 
      event.target.value = null;
    }
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
            <center><img src = {this.props.card.img} /></center> <br></br> <br></br>
            <div><b>Service Type: </b>{this.props.card.service_type}</div><br></br> 
            <div><b>Services Offered: </b></div>
            <div>{this.props.card.services_offered}</div><br></br>
            
            <div>
              Add Tags:
              <input type = "text" name = "tag" onKeyDown = {this.keyDown} />
              {this.props.card.tags}
            </div>

            <button onClick={this.closeModal}>close</button>

          </Modal>
        </Col>
      </div>
    );
  }
});
var CardContainer = React.createClass({
  render: function() {
      var rows = [];
      var index_tracker = 0;
      var prop = this.props;
      this.props.cards.forEach(function(card) {
        var added = false;
        card.keys.forEach(function(key) { //potentially switch to .every call (could be a bottle neck down the road)
          if(!added && key.toLowerCase().indexOf(prop.filterText.toLowerCase()) !== -1) {
            rows.push(<Card card={card} index={index_tracker} key={card.name} onTagInput={prop.tagInput} />);
            added = true;
          }
        })
        index_tracker++;
      }.bind(this));
      return (  
       <div>

          {rows}

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
      filterText: '',
      state_card: []
    };
  },
  componentDidMount: function() {
    $.get(this.props.source, function(returnedCards) {
      console.log(returnedCards);
      if(this.isMounted()) {
        this.setState({
          state_card: returnedCards
        });
      }
    }.bind(this));
  },
  handleTagAdd: function(newTag, indexOf) {
    console.log(newTag);
    console.log(indexOf);
    var holder = this.state.state_card;
    holder[indexOf].tags.push(newTag);
    this.setState({
      state_card: holder
    });
  },
  handleSearchInput: function(filterText) {
    this.setState({
      filterText: filterText
    });
  },
  render: function(){
      return (
        <div>
          <Col xs={12} md={2}>
          <SearchBarContainer filterText = {this.state.filterText} onSearchInput = {this.handleSearchInput} />
          </Col>
          <Col xs={12} md={8}>
          <CardContainer cards = {this.state.state_card} filterText = {this.state.filterText} tagInput = {this.handleTagAdd} />
          </Col>
        </div>
      );
    }
});

module.exports = MainContainer;