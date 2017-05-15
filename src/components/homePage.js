"use strict";  //evaluate everything in strict mode;

var React = require('react');

//as 'class' is a reserved keyword in JS, JSX uses className
var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1> Pluralsight Admin</h1>
				<p>React, React Router and Flux for ultra-responsive web apps.</p>
			</div>
		);
	}
});

module.exports = Home;