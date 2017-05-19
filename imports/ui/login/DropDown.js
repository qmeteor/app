/**
 * Created by Bien on 2017-03-30.
 */
import React from 'react';
import Dropdown, { DropdownContent, DropdownTrigger } from 'react-simple-dropdown';

import { Accounts } from 'meteor/accounts-base';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: 'Bien'
        };

        this.onLogout = this.onLogout.bind(this);
        this.empty = this.empty.bind(this);
    }

    onLogout() {
        Accounts.logout();
    }

    handleLinkClick() {
        this.refs.dropdown.hide();
    }

    empty() {
        console.log('clicked');
    }

    render() {
        var user = this.props.user;
        return (
            <Dropdown className="account-dropdown" ref="dropdown">
                <DropdownTrigger>
                    <img className="account-dropdown__avatar" src={this.state.user} /><span className="account-dropdown__name">My Account</span>
                </DropdownTrigger>
                <DropdownContent>
                    <div className="account-dropdown__identity account-dropdown__segment">
                        Signed in as <strong>{this.state.user}</strong>
                    </div>
                    <ul className="account-dropdown__quick-links account-dropdown__segment">
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.empty}>
                                Your profile
                            </a>
                        </li>
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.empty}>
                                Your stars
                            </a>
                        </li>
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.empty}>
                                Explore
                            </a>
                        </li>
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.empty}>
                                Help
                            </a>
                        </li>
                    </ul>
                    <ul className="account-dropdown__management-links account-dropdown__segment">
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.empty}>
                                Settings
                            </a>
                        </li>
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.onLogout}>
                                Sign out
                            </a>
                        </li>
                    </ul>
                </DropdownContent>
            </Dropdown>
        );
    }
}