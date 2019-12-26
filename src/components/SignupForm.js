import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign Up</h5>
                                <form className="form-signin" onSubmit={e => this.props.handle_signup(e, this.state)}>
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control" placeholder="Username"
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handle_change}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" placeholder="Password"
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handle_change}
                                    />
                                    <br/>
                                    <input type="submit" className="btn btn-block btn-primary text-uppercase" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default SignupForm;

SignupForm.propTypes = {
    handle_signup: PropTypes.func.isRequired
};