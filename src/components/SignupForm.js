import React from 'react';
import PropTypes from 'prop-types';
import GroupDropdown from "./GroupDropdown";




class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            first_name: '',
            last_name: '',
            groups: [],
            password: '',
            options: []
        }
    }

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            console.log(value);
            console.log(name);
            newState[name] = value;
            return newState;
        });
    };


    componentDidMount() {

    }
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
                                    <label>First Name</label>
                                    <input className="form-control " placeholder="First Name"
                                           type="text"
                                           name="first_name"
                                           value={this.state.first_name}
                                           onChange={this.handle_change}
                                    />
                                    <label>Last Name</label>
                                    <input className="form-control " placeholder="Last Name"
                                           type="text"
                                           name="last_name"
                                           value={this.state.last_name}
                                           onChange={this.handle_change}
                                    />
                                    <br/>
                                    <label>
                                        Group
                                        <GroupDropdown/>
                                    </label>
                                    <br/>
                                    <h1>Current Username: {this.state.username}</h1>
                                    <div>
                                        <ul>
                                            {this.state.groups.map(item => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

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