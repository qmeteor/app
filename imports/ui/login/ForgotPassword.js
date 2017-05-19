/**
 * Created by Bien on 2017-04-27.
 */
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Reset } from './CheckEmail';
import { check } from 'meteor/check';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';



export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: ''
        };

        this.changePassword = this.changePassword.bind(this);
    }
//TODO: provide #validateLoginAttempt on server side. And provide error returns for incorrect email and no entry paths.
    changePassword(e) {

        e.preventDefault();

        console.log("reset password");

        let email = this.refs.email.value.trim();
        //let pattern = 'a';
        //check(email, pattern);
        Session.set({hasEmail: false});
        //TODO: Validate email on Server side as well with #call
        Accounts.forgotPassword({email}, (err) => {
            if(err) {
                if(err.error == 400) {
                    this.setState({error: 'Must enter a valid email.'});
                    console.log(err);
                    Session.set({hasEmail: false});
                } else {
                    console.log(err);
                    Session.set({hasEmail: true});
                }
            } else { // Send email
                this.setState({error: ''});
                console.log(err);
                Session.set({hasEmail: true});

                console.log('client sending...');

            }
            console.log('hasEmail: ', Session.get('hasEmail'));

        });


    }

    render() {
        return (
        <div className="resetpassword__form">
            <header className="resetpassword">
                <h3>Reset your password</h3>
            </header>
            <section className="resetpassword">
                <article>
                <p>
                    Enter the email address associated with your Beanster.tv account, then click Continue. We'll email you a link to a page where you can easily create a new password.
                </p>
                    <form onSubmit={this.changePassword} noValidate className="resetpassord__form" autoComplete="ona">
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <br/>
                        <button className="button">Continue</button>
                    </form>
                </article>
            </section>
            <footer className="resetpassword">
                {this.state.error ? <p>{this.state.error}</p> : null}
            </footer>
        </div>
    )};
}