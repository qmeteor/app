/**
 * Created by Bien on 2017-03-24.
 */
import React from 'react';
//import { Link } from 'react-router'; // v3
import { Accounts } from 'meteor/accounts-base';
//import { Link } from 'react-router-dom'; // v4
//import Modal from 'react-modal';


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

        Accounts.createUser({username, email, password}, (err) => {
            console.log(err)
            if (err) {
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
            }
            //console.log('Signup callback', err);
        });

        // this.setState({
        //    error: 'Something went wrong.'
        // });
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