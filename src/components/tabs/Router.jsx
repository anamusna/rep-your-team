import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Tabs from './Tabs';
import Homepage from "../layout/HomePage";
//import sportsFans from '../img/sportsFans.jpg';

class Router extends Component {
	constructor() {
		super();

		this.state = {
			step: 1
		};
	}

	finalStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		switch (step) {
			case 1:
				return (
					<Tabs
						finalStep={this.finalStep}
						handleChange={this.handleChange}
					/>

				);
			case 2:
				return (
					<Homepage
					/>
				);
			default:
		}

	}
}

export default Router;

