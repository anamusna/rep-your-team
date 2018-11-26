import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Tabs from './Tabs';
//import sportsFans from '../img/sportsFans.jpg';

class Router extends React.Component {
	render() {
		return (
			<div className="form-label-group">
				<div>
					<Tabs />
				</div>
			</div>
		);
	}
}

export default Router;
