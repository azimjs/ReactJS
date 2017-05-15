//"use strict" --not using here coz of $ global var , but use IIFE to bypass the error as below

$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');	
var Header = require('./components/common/header');

(function(win) {
	"use strict";
	var App = React.createClass({
		render: function() {
			var Child;

			switch(this.props.route) {
				case 'about' : Child = About; break;
				case 'authors' : Child = Authors; break;
				default: Child = Home; 
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);
		}
	});

	function render() {
		console.log("hashchange");
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	win.addEventListener('hashchange',render);
	render();

})(window);

/*
React.render(<Home />, document.getElementById('app'));

var App = console.log("Hello from browserify!!!!");

module.exports = App;
*/