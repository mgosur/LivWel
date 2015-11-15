var React = require("react");
var ReactDOM = require("react-dom");
var Modal = require("react-modal");
var ReactBootstrap = require("react-bootstrap");
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};






var ModalWithImg = React.createClass({

  getInitialState: function() {
    return { 
      modalIsOpen: false,
      tags: []
    };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  addTags: function (tag) {
    
      this.setState({tags: this.state.tags.concat(tag)})
  },

  keyDown: function (event){
    if (event.key == "Enter")
    {
      this.addTags(event.target.value) 
      event.target.value = null;

    }

  },

  render: function() {

    var tags = this.state.tags.map(function(tag, i){
      return <p>{tag}</p>
    })
    return (

      <div>


        
        
        <Col xs={6} md={4}>
        <br/>
     
        

        <img src={this.props.src} onClick={this.openModal} />
        
        </Col>
        
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <h2>Card {this.props.index +1}</h2>
          <img src = {this.props.src} /> <br></br>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>

          <div>
          
          Add Tags:
          <input type = "text" name = "tag" onKeyDown = {this.keyDown}/>
          {tags}
          </div>
        </Modal>
      
      </div>
    );
  }
});

var MainContainer = React.createClass({
	
	render: function(){
    var srcs = ["./src/imgs/example.png", "./src/imgs/example.png", "./src/imgs/example.png", "./src/imgs/example.png", "./src/imgs/example.png", "./src/imgs/example.png"];
    var modals = srcs.map(function (src,i) {
      return <ModalWithImg src={src} key={i} index = {i}/>
    });

		return (
			<div>
			   {modals}
			</div>
		)
	}
})

ReactDOM.render(
    <MainContainer/>,
    document.getElementById("example")
);

