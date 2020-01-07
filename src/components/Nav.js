import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
    const logged_out_nav = (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center">
            <a className="navbar-brand font-weight-bold" >Application <span className="badge badge-secondary">New</span></a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" onClick={() => props.display_form('login')} >Log In</a>
                </li>
            </ul>
        </nav>

    );

    const logged_in_nav = (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center">
            <a className="navbar-brand font-weight-bold" >Application <span className="badge badge-secondary">New</span></a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" onClick={() => props.display_form('signup')}>Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link font-weight-bold" onClick={props.handle_logout} >Log Out</a>
                </li>
            </ul>
        </nav>

    );
    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired
};