import React, { Component } from 'react';

class Nav extends Component {
	render() {
		return (
			<div classNameName="container">
				<nav className=" navbar-expand navbar navbar-dark  fixed-top bg-light shadow">
					<a href="#" class="navbar-brand d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							viewBox="0 0 24 24"
							fill="none"
							stroke="red"
							stroke-width="1"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-2">
							<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
							<circle cx="12" cy="13" r="4" />
						</svg>
					</a>

					<form className="form-inline my-2 my-md-0 " style={{ width: '85%' }}>
						<input
							style={{ width: '100%' }}
							className="form-control"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
					</form>
					<button style={{ padding: '20px', marginLeft: '20px' }} className="btn btn-danger">
						click
					</button>
				</nav>
			</div>
		);
	}
}

export default Nav;
