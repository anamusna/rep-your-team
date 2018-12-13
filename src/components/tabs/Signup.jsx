import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import './styles.css';

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
		};
	}

	//Proceed to next step
	nextStep = () => {
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
		this.setState({
			[input]: e.target.value
		});
	};


	render() {
		const { step } = this.state;
		const { username, email, password, team, location } = this.state;
		const values = { username, email, password, team, location };

		switch (step) {
			case 1:
				return (
					<UserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return (
					<PersonalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return (
					<Confirm
						finalStep={this.props.finalStep}
						prevStep={this.prevStep}
						values={values}
					/>
				);
			default:
		}
	}
}

export default SignUp;
