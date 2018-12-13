import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Button, FormControl } from '@material-ui/core';
import { Logo } from './helpers';
import './styles.css';

class Confirm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        // this.props.finalStep();
        alert(`Congrats you signed up as 
        Username: ${this.props.values.username}
        Email: ${this.props.values.email} 
        Password: ${this.props.values.password}
        Location: ${this.props.values.location}
        Team: ${this.props.values.team}
        `);
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { username, email, password, location, team }
        } = this.props;
        return (
            <div id="tabs" className="center">
                <div className="container-fluid align-content-center">
                    <form>

                        <Logo />
                        <FormControl>
                            <ul className="container">
                                <li>Username: {username}</li>
                                <li>Email: {email}</li>
                                <li>Password: {password}</li>
                                <li>Location: {location}</li>
                                <li>Team: {team}</li>
                            </ul>
                        </FormControl>

                        <Grid className="">
                            <Button type="submit" variant="extendedFab" className="btn-success" onClick={this.handleSubmit}>
                                confirm and continue
								</Button>

                            <Button id="tab" type="submit" className="btn-success" onClick={this.back}>
                                back
								</Button>
                        </Grid>
                    </form>
                </div>
            </div>


        );
    }
}



export default Confirm;
