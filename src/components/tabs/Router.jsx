import React from 'react';
import { Route } from 'react-router';
import Tabs from './Tabs';

class Router extends React.Component {
	render() {
		return (
			<div>
				<Route path="/" exact component={Tabs} />
				<Route path="/login" exact component={Tabs} />
			</div>
		);
	}
}

export default Router;
