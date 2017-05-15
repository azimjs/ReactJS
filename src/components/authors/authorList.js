"use strict";

var React = require('react');

var AuthorList = React.createClass({
	//authorList always require "authors" as properties, so using propTypes
	//it will show error up in chromeconsole when property is not there 
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},

	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td><a href={"/#authors/" + author.id}>{author.id}</a></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr> 
			);
		};
		return (
			<table className="table">
				<thead>
					<th>ID</th>
					<th>Name</th>
				</thead>
				<tbody>
					{this.props.authors.map(createAuthorRow, this)}
				</tbody>
			</table>
		);
	}
});

module.exports = AuthorList;

//props = just like html property from parent