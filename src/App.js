import React, { Component } from 'react';

import Nav from './components/layout/Nav';
import Nav2 from './components/layout/Nav2';

import Login from './components/layout/Login';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Nav />

				<Nav2 />
				<Login />
			</React.Fragment>
		);
	}
}

export default App;
