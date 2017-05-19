/**
 * Created by Bien on 2017-04-16.
 */
import React from 'react';
import { Link } from 'react-router'; // v3
import { Meteor } from 'meteor/meteor';
import ReactModal from 'react-modal';
import Signup from './Signup';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            showModal: false,
            modalOverlayClass: "modal-view-overlay"
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleOpenModal() {
        this.setState({
            modalOverlayClass: "modal-view-overlay fadein",
            showModal: true
        });
    }
    //TODO: updates className but UI overlay does not fadeout, I think it has to do with lifecycle state "didcomponentmount"?
    handleCloseModal() {
        this.setState({
            modalOverlayClass: "modal-view-overlay fadeout",
            showModal: false
        });
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
                this.setState({error: 'Unable to login check email and password'});
            } else {
                this.setState({error: ''});
            }
            //console.log('Login callback', err);
        });
    }

    render() {
        //console.log("state: " + this.state.modalOverlayClass)
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">

                    <button className="btn-link" onClick={() => this.handleOpenModal()}>
                        Log in or sign up
                    </button>

                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Log In"
                        onRequestClose={this.handleCloseModal}
                        className="modal-view"
                        overlayClassName={this.state.modalOverlayClass}
                    >
                        <header className="modalHeader">
                                <nav className="x shift" onClick={() => this.handleCloseModal()}>close &#10005;</nav>
                        </header>
                        <section className="modalSection">
                            <article className="signupModal">
                                <Signup/>
                            </article>
                            <article className="modalLine">

                            </article>
                            <article className="loginModal">
                                <h1 className="h2">Log In</h1>

                                {this.state.error ? <p>{this.state.error}</p> : null}

                                <form onSubmit={this.onSubmit} noValidate className="boxed-view__form" autoComplete="on">
                                    <input type="email" ref="email" name="email" placeholder="Email"/>
                                    <input type="password" ref="password" name="password" placeholder="Password"/>
                                    <button className="button">Login</button>
                                </form>

                                <Link className="resetPassword" role="button" to={'/resetpassword'}>forgot password?</Link>

                            </article>
                        </section>
                        <footer className="termsFooter">
                            <p className="termsofservice">By clicking <button className="terms">Create Account</button>, you agree to our Terms and that you have read our <button className="terms">Data Policy</button> and Content Policy.</p>
                        </footer>
                    </ReactModal>

                </div>
                <div>

                </div>
            </div>

        );
    }
}