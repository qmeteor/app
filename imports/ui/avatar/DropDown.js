/**
 * Created by Bien on 2017-03-30.
 */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';


import Dropdown, { DropdownContent, DropdownTrigger } from 'react-simple-dropdown';

export class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        };

        this.onLogout = this.onLogout.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleChannels = this.handleChannels.bind(this);
        this.handleMessages = this.handleMessages.bind(this);
        this.handleStats = this.handleStats.bind(this);
        this.handleSettings = this.handleSettings.bind(this);
    }

    onLogout() {
        Accounts.logout();
    }

    handleLinkClick() {
        this.refs.dropdown.hide();
    }

    handleProfile() {
        this.props.Session.set('selectedDropDownItem', '/profile');
        console.log(this.props.Session.get('selectedDropDownItem'));
    }

    handleChannels() {
        this.props.Session.set('selectedDropDownItem', '/channels');
        console.log(this.props.Session.get('selectedDropDownItem'));

    }

    handleMessages() {
        this.props.Session.set('selectedDropDownItem', '/messages');
        console.log(this.props.Session.get('selectedDropDownItem'));
    }

    handleStats() {
        this.props.Session.set('selectedDropDownItem', '/stats');
        console.log('stats');
    }

    handleSettings() {
        this.props.Session.set('selectedDropDownItem', '/settings');
        console.log('settings');
    }

    render() {

        let user = Meteor.userId();
        return (
            <Dropdown className="account-dropdown" ref="dropdown">
                <DropdownTrigger>
                    User
                </DropdownTrigger>
                <DropdownContent className="account-dropdown-content">
                    <div className="account-dropdown__identity account-dropdown__segment">
                        Signed in as <strong>{user}</strong>
                    </div>
                    <ul className="account-dropdown__quick-links account-dropdown__segment">
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.handleProfile}>
                                Profile
                            </a>
                        </li>
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.handleChannels}>
                                Channels
                            </a>
                        </li>
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.handleMessages}>
                                Messages
                            </a>
                        </li>
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.handleStats}>
                                Stats
                            </a>
                        </li>
                    </ul>
                    <ul className="account-dropdown__management-links account-dropdown__segment">
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.handleSettings}>
                                Settings
                            </a>
                        </li>
                        <li className="account-dropdown__link">
                            <a className="account-dropdown__link__anchor" href="#" onClick={this.onLogout}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </DropdownContent>
            </Dropdown>
        );
    }
}

DropDown.propTypes = {
    selectedDropDownItem: React.PropTypes.string,
    dropDownItem: PropTypes.string,
    Session: PropTypes.object.isRequired,
};

export default createContainer(() => {
    const selectedDropDownItem = Session.get('selectedDropDownItem');

    return {
        dropDownItem: selectedDropDownItem,
        Session
    };
}, DropDown);