import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Project from './Project';
import Contact from './Contact';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>

				<Router> 
						<div> 
						<nav>
							<Link to="/"> Home </Link> 
							<Link to="/project"> Projects </Link>
							<Link to='/contactme'> Contact </Link>
						</nav>

				<Route exact path="/" component={Home} />   
				<Route path="/project" component={Project} /> 
				<Route path="/contactme" component={
								() => (<Contact name="Brandi Butler" />)
							} /> 
			</div>

				</Router> 

			</div>
		);
	}
}

// the links must be the children of the router. 
export default App;
