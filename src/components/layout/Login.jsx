import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div class="container">
				<form class="form">
					<h2 class="text-center">Please sign in</h2>
					<hr />
					<label for="inputEmail" class="sr-only">
						Email address
					</label>
					<input
						type="email"
						id="inputEmail"
						class="form-control"
						placeholder="Email address"
						required
						autofocus
					/>
					<label for="inputPassword" class="sr-only">
						Password
					</label>
					<input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
					<div class="checkbox">
						<label>
							<input type="checkbox" value="remember-me" />
						</label>
					</div>
					<button class="btn btn-lg btn-primary btn-block" type="submit">
						Sign in
					</button>
				</form>
			</div>
		);
	}
}

export default Login;