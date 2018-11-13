import React from 'react';
import { BrowserRouter, Route } from 'react-router';
import HomePage from './HomePage';
import NotFound from './NotFound';

class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path="/" exact component={HomePage} />
					<Route path="/login" exact component={NotFound} />
				</div>
			</BrowserRouter>
		);
	}
}

export default Router;
