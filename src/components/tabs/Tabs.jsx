import React from 'react';
import Button from '@material-ui/core/Button';
//import { Button } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';

class Tabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {},
			view: 0
		};
	}

	changeView = (view) => this.setState({ view });

	render() {
		const { view } = this.state;
		return (
			<div style={{ margin: "5% auto" }}>
				<div id="control ">
					{view === 0 ? (
						<div id="tabs" className="center">

							<h2 className="text-center" style={{ fontWeight: '700' }}>
								Please sign in
							</h2>
							<div>
								<Button id="tab" href="#" className="active">
									Login
								</Button>
								<Button id="tab" href="#" onClick={() => this.changeView(1)}>
									Register
								</Button>
							</div>
						</div>
					) : (
							view === 1 && (
								<div id="tabs">
									<div>
									</div>
									<h2 className="text-center" style={{ fontWeight: '700' }}>
										Signup to start
								</h2>
									<div>
										<Button id="tab" href="#" onClick={() => this.changeView(0)}>
											Login
									</Button>
										<Button id="tab" href="#" className="active">
											Register
									</Button>
									</div>
								</div>
							)
						)}
				</div>
				<br />
				<div id="content">{view === 1 ? <Signup /> : <Login />}</div>
			</div>
		);
	}
}

export default Tabs;
