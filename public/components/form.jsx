var React = require('react');
var ReactBootstrap = require("react-bootstrap");
var Input = ReactBootstrap.Input;
var ButtonInput = ReactBootstrap.ButtonInput;
const customStyles = {
  content : {
    width                 : '50%'
  }
};

var FormContainer = React.createClass({
	parseInput: function(unparsedInput) {
		var parsedArray = unparsedInput.split(", ");
		return parsedArray;
	},
	submitForm : function() {
		console.log(this.refs.formName);
	},
	render: function() {
		return (
				<div>
					<center>
						<h1>
						Card Form
						</h1>
					</center>
					<form>
						<Input ref="formName" type="text" label="Name" placeholder="Enter name" />
						<Input type="text" label="Phone Number" placeholder="Enter phone number" />
						<Input type="text" label="Address" placeholder="Enter address information" />
						<Input type="text" label="About" placeholder="Enter about information" />
						<Input type="text" label="Mission Statement" placeholder="Enter mission statement" />
						<Input type="text" label="Services Provided" placeholder="Enter services provided seperated by comma and space" />
						<Input type="text" label="Populations Served" placeholder="Enter populations served seperated by comma and space" />
						<Input type="text" label="Specialities" placeholder="Enter specialities seperated by comma and space" />
						<Input type="text" label="Tags" placeholder="Enter tags seperated by comma and space" />
						<ButtonInput type="submit" value="Submit Button" onClick={this.submitForm}/> 
					</form>
				</div>
			)
	}
})

module.exports = FormContainer;