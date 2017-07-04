/**
 * Created by Bien on 2017-03-24.
 */
import React from 'react';
import { Accounts } from 'meteor/accounts-base';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          error: '',
          isOpen: false
        };
    }

    onSubmit(e) {
        e.preventDefault();

        let username = this.refs.username.value.trim();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        let verifypassword = this.refs.verifypassword.value.trim();

        if (password.length < 9) {
            return this.setState({error: 'Password must be more than 8 characters long'})
        }

        if (password != verifypassword) {
            return this.setState({error: 'Password does not match'})
        }

        if (!!username == false) {
            return this.setState({error: 'Must have username'})
        }

        if (username.length < 4) {
            return this.setState({error: 'Username must have minimum of 4 characters'})
        }

        Accounts.createUser({username, email, password}, (err) => {
            if (err) {
                console.log('createUser', err);
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
                console.log('createUser on client success');
            }
        });
    }

    render() {
        return (
            <div>
                <h1 className="h2">Sign Up</h1>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form" autoComplete="off">
                    <input type="username" ref="username" name="username" placeholder="Choose a username"/>
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="password" placeholder="Password"/>
                    <input type="password" ref="verifypassword" name="verifypassword" placeholder="Verify password"/>
                    <button className="button">Create Account</button>
                </form>
            </div>
        );
    }
}