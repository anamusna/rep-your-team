import './styles.css';
import React from 'react';
import { Button, FormControl, Grid, InputLabel, Input } from '@material-ui/core';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import base from './base';

import { RenderCheckBox } from './helpers';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}
	handleSubmit = (evt) => {
		if (this.componentWillMount()) {
			evt.preventDefault();
			return;
		} else {
			const { email, password } = this.state;
			alert(`Signed in with email: ${email} password: ${password}`);
		}


	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	componentWillMount() {
		this.Ref = base.syncState('loginEmail', {
			context: this,
			state: 'email'
		});
		this.Ref = base.syncState('loginPassword', {
			context: this,
			state: 'password'
		});
	}

	render() {
		return (
			<div className="bm-padding ">
				<div className="bm-center-content row">
					<form id="form-login" className="col">
						<FormControl fullWidth className="row">
							<InputLabel>Email</InputLabel>
							<Input
								type="email"
								name="email"
								id="email"
								placeholder="email@example.com"
								onChange={this.handleChange}
								required
							/>
						</FormControl>
						<FormControl fullWidth className="row">
							<InputLabel>Password</InputLabel>
							<Input
								id="password"
								type="password"
								name="password"
								placeholder="enter password"
								onChange={this.handleChange}
								required
							/>
						</FormControl>
						<div className="row ">
							<Grid item xs={6}>
								<RenderCheckBox />
							</Grid>

							<Grid item xs={6} style={{ textAlign: 'right', color: 'white' }}>
								<a id="reset-password" href="/">
									<span>Forgotten password?</span>
								</a>
							</Grid>

							<Grid item xs={12}>
								<Button type="submit" variant="extendedFab" className="btn-info" onClick={this.handleSubmit}>
									Login
								</Button>
							</Grid>
						</div>
						<br />
						<hr />
						<FacebookLoginButton iconSize="20px" size="40px" onClick={() => alert("Hello")}>
							<span style={{ fontSize: 15 }}>Login with facebook</span>
						</FacebookLoginButton>
						<GoogleLoginButton iconSize="20px" size="40px" onClick={() => alert("Hello")}>
							<span style={{ fontSize: 15 }}>Login with google</span>
						</GoogleLoginButton>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
