import './styles.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { FormErrors } from './FormErrors';
import base from './base';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeat_password: '',
            formErrors: { email: '', password: '', repeat_password: '' },
            emailValid: false,
            passwordValid: false,
        };
        //console.log(this.state)
    }

    continue = (e) => {
        if (this.componentWillMount()) {
            e.preventDefault();
            return;
        } else {

            this.props.nextStep();
            //  alert(`Signed up with email: ${email} password: ${password}`);
        }
    }

    componentWillMount() {
        this.Ref = base.syncState('signupEmail', {
            context: this,
            state: 'email'
        });
        this.Ref = base.syncState('signupPassword', {
            context: this,
            state: 'password'
        });
    }

    validateField(fieldName, value) {
        // console.log(fieldName, value);

        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let repeat_passwordValid = this.state.repeat_passwordValid;

        switch (fieldName) {
            default:
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid!';
                console.log(value, this.state.email);
                break;
            case 'password':
                passwordValid = value.length > 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short!';
                console.log(value, this.state.password);
                break;
            case 'repeat_password':
                repeat_passwordValid = value === this.state.password;
                fieldValidationErrors.repeat_password = repeat_passwordValid ? '' : ' dont match';
                console.log(value, this.state.repeat_password);
                break;

        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        });
    }

    errorClass(error) {
        return error.length === 0 ? '' : 'has-error';
    }
    render() {
        const { values, handleChange } = this.props;
        return (

            <div id="tabs" className="center">
                <div className="bm-center-content row">
                    <form id="form-login" className="col" >

                        <FormControl
                            fullWidth
                            className={`form-group row ${this.errorClass(this.state.formErrors.email)}`}>
                            <InputLabel>Email</InputLabel>

                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="email@example.com"
                                onChange={handleChange("email")}
                                defaultValue={values.email}
                                required
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            className={`form-group row ${this.errorClass(this.state.formErrors.password)}`}>
                            <InputLabel>Password</InputLabel>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="enter password"
                                onChange={handleChange("password")}
                                defaultValue={values.password}
                                required
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            className={`form-group row ${this.errorClass(this.state.formErrors.password)}`}>
                            <InputLabel>Repeat Password</InputLabel>
                            <Input
                                type="password"
                                name="repeat_password"
                                placeholder="repeat password"
                                onChange={handleChange("repeat_password")}
                                defaultValue={values.repeat_password}
                                required
                            />
                        </FormControl>
                        <FormErrors formErrors={this.state.formErrors} />

                        <div className="row">
                            <Grid item xs={12}>
                                <Button type="submit" variant="extendedFab" className="btn-success" onClick={this.continue} >
                                    next
								</Button>


                            </Grid>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default UserDetails;
