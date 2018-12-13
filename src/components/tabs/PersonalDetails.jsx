import React, { Component } from "react";
import { Button, FormControl, InputLabel, Input, Grid } from '@material-ui/core';
import './styles.css';

class PersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleChange } = this.props;
        return (
            <div id="tabs" className="center">
                <form id="form-login" className="col" >
                    <FormControl
                        fullWidth
                        className="form-group row">
                        <InputLabel>Username</InputLabel>

                        <Input
                            id="username"
                            type="username"
                            name="username"
                            placeholder="Choose a Username"
                            onChange={handleChange("username")}
                            defaultValue={values.username}
                            required
                        />
                    </FormControl>
                    <FormControl
                        fullWidth
                        className="form-group row">
                        <InputLabel>Location</InputLabel>

                        <Input
                            id="location"
                            type="location"
                            name="location"
                            placeholder="Select Your Location"
                            onChange={handleChange("location")}
                            defaultValue={values.location}

                        />
                    </FormControl>
                    <FormControl
                        fullWidth
                        className="form-group row">
                        <InputLabel>Team</InputLabel>

                        <Input
                            id="team"
                            type="team"
                            name="team"
                            placeholder="which team you support"
                            onChange={handleChange("team")}
                            defaultValue={values.team}
                            required
                        />
                    </FormControl>


                    <Grid className="">
                        <Button type="submit" variant="extendedFab" className="btn-success" onClick={this.continue}>
                            next
								</Button>

                        <Button id="tab" type="submit" className="btn-success" onClick={this.back}>
                            back
								</Button>
                    </Grid>

                </form>
            </div>



        );
    }
}


export default PersonalDetails;
