import React, { Component } from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import FixtureMonitor from "./components/FixtureMonitor";

import './App.css';
import axios from "axios";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('access') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      axios.get('http://localhost:8000/auth/users/me/',
          { headers: {
                        "Authorization" : `Bearer ${localStorage.getItem('access')}`
                    }
                 })
          .then(res => res.data)
          .then(data => {
              this.setState({username: data.username})
          })
    }
  }

  handle_login = (e, datas) => {
      e.preventDefault();
      axios.post('http://localhost:8000/auth/jwt/create/',datas)
          .then(res => res.data )
          .then(data => {
              localStorage.setItem('access', data.access);
              localStorage.setItem('refresh', data.refresh);
              localStorage.setItem('user', datas.username);
              this.setState({
                  logged_in: true,
                  displayed_form: '',
                  username: datas.username
              });
          });

  };

  handle_signup = (e, datas) => {
    e.preventDefault();
      console.log(datas);
      axios.post('http://localhost:8000/accounts/users/',datas,
          { headers: {
                  "Authorization" : `Bearer ${localStorage.getItem('access')}`
              }
          })
          .then(res => res.data )

          .then(data => {
              localStorage.setItem('access', data.access);
              localStorage.setItem('refresh', data.refresh);
              this.setState({
                  logged_in: true,
                  displayed_form: '',
                  username: datas.username
              })
          })
          .catch((error) => {
              if(e.response){
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              }else if (error.request) {
                  /*
                   * The request was made but no response was received, `error.request`
                   * is an instance of XMLHttpRequest in the browser and an instance
                   * of http.ClientRequest in Node.js
                   */
                  console.log(error.request);
              } else {
                  // Something happened in setting up the request and triggered an Error
                  console.log('Error', error.message);
              }
              console.log(error.config);
          })


  };

  handle_logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
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
    let table;
    if(this.state.logged_in){
        table = <FixtureMonitor/>
    }else {
        table = <div><h3 className="text-center text-justify">Please Log In</h3></div>
    }

    return (
        <div >
          <Nav
              logged_in={this.state.logged_in}
              display_form={this.display_form}
              handle_logout={this.handle_logout}
          />
          {form}
          {table}

        </div>
    );
  }
}

export default App;