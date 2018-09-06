import React, { Component } from 'react';

class Project extends Component {
		componentDidMount() {
		document.title = 'Project';
	}
	render() {
		return (
			<div>
				<h1> HOME PAGE </h1>
				<h2> My game was about spaceships fighting </h2>

				<p>   Project One    </p>
				<p>  Project Two 	 </p>
			</div>
		);
	}
}

export default Project;
