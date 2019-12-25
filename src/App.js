import React, { Component } from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';
import axios from "axios";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      axios.get('http://localhost:8000/core/current_user/',
          { headers: {
                        "Authorization" : `JWT ${localStorage.getItem('token')}`
                    }
                 })
          .then(res => res.data)
          .then(data => {
              this.setState({username: data.username})
          })

      // fetch('http://localhost:8000/core/current_user/', {
      //   headers: {
      //     Authorization: `JWT ${localStorage.getItem('token')}`
      //   }
      // })
      //     .then(res => res.json())
      //     .then(json => {
      //       this.setState({ username: json.username });
      //     });

    }
  }

  handle_login = (e, data) => {
      e.preventDefault();
      axios.post('http://localhost:8000/token-auth/',data)
          .then(res => res.data )
          .then(data => {
              localStorage.setItem('token', data.token);
              this.setState({
                  logged_in: true,
                  displayed_form: '',
                  username: data.user.username
              });
          });

  };

  handle_signup = (e, data) => {
    e.preventDefault();
      axios.post('http://localhost:8000/core/users/',data)
          .then(res => res.data )
          .then(data => {
              localStorage.setItem('token', data.token);
              this.setState({
                  logged_in: true,
                  displayed_form: '',
                  username: data.username
              });
          });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
        <div className="container App">
          <Nav
              logged_in={this.state.logged_in}
              display_form={this.display_form}
              handle_logout={this.handle_logout}
          />
          {form}
          <h3>
            {this.state.logged_in
                ? `Hello, ${this.state.username}`
                : 'Please Log In'}
          </h3>
        </div>
    );
  }
}

export default App;