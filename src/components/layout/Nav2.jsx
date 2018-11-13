import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Nav2 extends Component {
	render() {
		return (
			<div classNameName="container-fluid" style={{ marginTop: '100px' }}>
				<nav className="navbar navbar-expand-xl relative-top navbar-white bg-white">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#myNav"
						aria-controls="myNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon bg-btn-dark" />
					</button>

					<div className="collapse navbar-collapse justify-content-md-center" id="myNav">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li class="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<Sidebar />
			</div>
		);
	}
}

export default Nav2;
