/**
 * Created by Bien on 2017-05-06.
 */
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';



export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        };

        this.Reset = this.Reset.bind(this);


    }

    Reset(e) {
        e.preventDefault();

        //Session.set('token', this.props.location.pathname.replace('/reset-password/', ''));
        // let token = Session.get('token');
        //
        // let newPassword = this.refs.newPassword.value.trim();
        //
        // Accounts.resetPassword(token, newPassword, (err) => {
        //     console.log(err);
        // });

        console.log(Session.get('mytoken'));

    }

    render() {
        return (
            <div className="resetpassword__form">
                <header className="resetpassword">
                    <h3>Reset Password Page Link</h3>
                </header>
                <section className="resetpassword">
                    <article>
                        <p>
                        Enter a new password.
                        </p>
                        <form onSubmit={this.Reset} noValidate className="resetpassord__form" autoComplete="on">
                            <input type="password" ref="newPassword" name="newPassword" placeholder="new password"/>
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