import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { provider, auth, ref } from '../../database';

import './Login.css';

let uid;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      authed: false,
    };
  }

  async login() {
    const result = await auth.signInWithPopup(provider);
    await this.setState({
      user: result.user,
      authed: true,
    });
    await this.saveUser();

    uid = result.user.uid;
  }

  saveUser() {
    return ref.child(`users/${this.state.user.uid}/info`)
      .set({
        name: this.state.user.displayName,
        profileURL: this.state.user.photoURL,
        email: this.state.user.email,
        uid: this.state.user.uid,
      })
      .then(() => this.state.user);
  }

  render() {
    return (
        <div className="Login">
          {
            this.state.authed && <Redirect to="/make" />
          }
          <p className="LoginTitle">Together</p>
          <button className="LoginButton" onClick={this.login.bind(this)}>
            Login with FaceBook
          </button>
        </div>
    );
  }
}

export default Login;
