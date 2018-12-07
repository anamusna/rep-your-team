import './styles.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormErrors } from './FormErrors';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import base from './base';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			formErrors: { email: '', password: '', repeat_password: '' },
			emailValid: false,
			passwordValid: false,

		};
	}

	handleSubmit = (evt) => {
		if (this.validateField()) {
			evt.preventDefault();
			return;
		} else {
			const { email, password } = this.state;
			alert(`Signed up with email: ${email} password: ${password}`);
		}


	}


	handleUserInput = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});

		this.validateField(e.target.name, e.target.value);

	};

	componentWillMount() {
		this.Ref = base.syncState('signupEmail', {
			context: this,
			state: 'email'
		});
		this.Ref = base.syncState('signupPassword', {
			context: this,
			state: 'password'
		});
	}

	validateField(fieldName, value) {
		//console.log(fieldName, value);

		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
		let repeat_passwordValid = this.state.repeat_passwordValid;

		switch (fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' is invalid!';
				//	console.log(value, this.state.email, emailValid);
				break;
			case 'password':
				passwordValid = value.length > 6;
				fieldValidationErrors.password = passwordValid ? '' : ' is too short!';
				//	console.log(value, this.state.password, passwordValid);
				break;
			case 'repeat_password':
				repeat_passwordValid = value === this.state.password;
				fieldValidationErrors.repeat_password = repeat_passwordValid ? '' : ' dont match';
				//	console.log(value, this.state.repeat_password, repeat_passwordValid);
				break;
			default:
				break;
		}
		this.setState({
			formErrors: fieldValidationErrors,
			emailValid: emailValid,
			passwordValid: passwordValid
		});
	}

	errorClass(error) {
		return error.length === 0 ? '' : 'has-error';
	}
	render() {
		return (
			<div className="bm-padding">
				<div className="bm-center-content row">
					<form id="form-login" className="col" >
						<p></p>
						<FormControl
							fullWidth
							style={{ color: "red" }}
							className={`form-group row ${this.errorClass(this.state.formErrors.email)}`}>
							<InputLabel>Email</InputLabel>

							<Input
								id="email"
								type="email"
								name="email"
								placeholder="email@example.com"
								onChange={this.handleUserInput}
								required
							/>
						</FormControl>
						<FormControl
							fullWidth
							className={`form-group row ${this.errorClass(this.state.formErrors.password)}`}>
							<InputLabel>Password</InputLabel>
							<Input
								id="password"
								type="password"
								name="password"
								placeholder="enter password"
								onChange={this.handleUserInput}
								required
							/>
						</FormControl>
						<FormControl
							fullWidth
							className={`form-group row ${this.errorClass(this.state.formErrors.password)}`}>
							<InputLabel>Repeat Password</InputLabel>
							<Input
								type="password"
								name="repeat_password"
								placeholder="repeat password"
								onChange={this.handleUserInput}
								required
							/>
						</FormControl>
						<FormErrors formErrors={this.state.formErrors} />

						<div className="row">
							<Grid item xs={12}>
								<button type="submit" variant="extendedFab" className="btn-success" onClick={this.handleSubmit} onSubmit={this.state.validateField}>
									Register
								</button>
							</Grid>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Signup;
