/**
 * Created by Bien on 2017-04-27.
 */
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';


export default class CheckEmail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          error: ''
        };

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
            browserHistory.push('/');
    }

    render() {
        return (
        <div>
            <header className="resetpassword">
                <h3>Check your e-mail.</h3>
            </header>
            <section className="resetpassword">
                If the e-mail address you entered is associated with an account in our records, you will receive an e-mail from us with instructions for resetting your password.
                If you don't receive this e-mail, please check your junk mail folder or contact Customer Service for further assistance.
            </section>
            <button className="button" onClick={this.goBack}>continue</button>
        </div>
    )};
}
