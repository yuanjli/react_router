import React, { Component } from 'react';


class Contact extends Component { 
	componentDidMount() {
		document.title = 'Contact me';
	}
	render(){
		return (<h1> Contact Meeeee {this.props.name} </h1> );
	}
}

export default Contact;
