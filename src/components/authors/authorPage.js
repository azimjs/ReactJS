"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

//this page's purpose is to call the api, load the basic body and 
//call the child which has the list
var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},
	//componentDidMount is executed after first render only on the client side. 
	//This is where AJAX requests and DOM or state updates should occur.
	componentDidMount: function() {
		// if condition without {} wont work coz of strict mode
		if(this.isMounted()) {
			this.setState({authors: AuthorApi.getAllAuthors()});
		}
	},

	render: function(){
		return (
			<div>
				<h1>List of Authors</h1>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}

});

module.exports = Authors;