import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Tabs from './Tabs';

class Router extends React.Component {
	render() {
		return (
			<div className="form-label-group">
				<Tabs />
			</div>
		);
	}
}

export default Router;
