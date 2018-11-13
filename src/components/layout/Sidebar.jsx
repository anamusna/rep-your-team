import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		return (
			<div class="container">
				<h1 className="text-center">Rep your team</h1>
				<div class="row">
					<nav class="col-md-2 d-none d-md-block bg-light sidebar">
						<div class="sidebar-sticky">
							<ul class="nav flex-column">
								<li class="nav-item">
									<a class="nav-link active" href="#">
										<span data-feather="home" />
										Dashboard <span class="sr-only">(current)</span>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="file" />
										Orders
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="shopping-cart" />
										Products
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="users" />
										Customers
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="bar-chart-2" />
										Reports
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="layers" />
										Integrations
									</a>
								</li>
							</ul>

							<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
								<span>Saved reports</span>
								<a class="d-flex align-items-center text-muted" href="#">
									<span data-feather="plus-circle" />
								</a>
							</h6>
							<ul class="nav flex-column mb-2">
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="file-text" />
										Current month
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="file-text" />
										Last quarter
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="file-text" />
										Social engagement
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										<span data-feather="file-text" />
										Year-end sale
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}

export default Sidebar;
