import React, { Component } from 'react';
import epitath from 'epitath';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import avataaars from '../img/avataaars.png';
import sportsFans from '../img/sportsFans.jpg';

export const Logo = () => (
	<div
		className="container-fluid"
		style={{
			display        : 'grid',
			justifyContent : 'center',
			verticalAlign  : 'middle',
			alignContent   : 'center'
		}}>
		<img
			src={avataaars}
			alt="logo"
			style={{
				width        : '100px',
				height       : '100px',
				marginTop    : '30px',
				marginBottom : '40px'
			}}
		/>
	</div>
);
export const Logo2 = () => (
	<div
		className="container-fluid"
		style={{
			display  : 'grid',
			position : 'absolute',
			left     : '0px',
			top      : '20px'
		}}>
		<img
			src={sportsFans}
			alt="logo"
			style={{
				width        : '100px',
				height       : '100px',
				marginTop    : '30px',
				marginBottom : '40px'
			}}
		/>
	</div>
);

class CheckBox extends Component {
	state = {
		rememberMe : false
	};

	handleChange = (rememberMe) => (event) => {
		this.setState({ [rememberMe]: event.target.checked });
	};

	render() {
		return this.props.children(this.state);
	}
}

function CheckBoxControl({ children, ...props }) {
	return <FormControlLabel control={<Checkbox {...props} render={children} />} label="Remember me" />;
}

export const RenderCheckBox = epitath(function*() {
	let { handleChange } = yield <CheckBox />;

	return (
		<CheckBoxControl
			icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
			checkedIcon={<CheckBoxIcon fontSize="small" />}
			onChange={handleChange}
			value="Remember me"
		/>
	);
});
