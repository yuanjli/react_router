import React, { Component } from 'react';

class Home extends Component {
		componentDidMount() {
		document.title = 'Home';
	}
	render(){
		return(
			<div>
			<h1> HOME PAGE </h1>
			<p>  There are many different things in the home page and it will look cool  </p>
			</div>);
	}
}

export default Home;



