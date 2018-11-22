import React, { Component } from 'react';
import Router from './components/tabs/Router';
import Nav from './components/layout/Nav';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Nav />
				<br />
				<br />
				<Router />
			</React.Fragment>
		);
	}
}

export default App;
