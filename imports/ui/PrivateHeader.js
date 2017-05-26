/**
 * Created by Bien on 2017-05-16.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';


import SearchBar from './SearchBar';


export const PrivateHeader = (props) => {
    return (
        <div className="header">
            <div className="header__content">
                <h1 className="header__title">{props.title}</h1> {/*TODO: to be replaced with some sort of div containing logo.*/}
                <SearchBar/>
                <button onClick={() => {
                    console.log('watch');
                    props.Session.set('selectedHeaderItem', '/watch');
                }}>Watch</button>
                <button onClick={() => {
                    console.log('respond');
                    props.Session.set('selectedHeaderItem', '/respond');
                }}>Respond</button>
                <button onClick={() => {
                    console.log('notifications');
                    props.Session.set('selectedHeaderItem', '/notifications');
                }}>Notifications</button>
                <button onClick={() => {
                    console.log('profile');
                    props.Session.set('selectedHeaderItem', '/profile');
                }}>Profile</button>
                <p>{ props.headerItem === '/profile' ? 'profile selected' : undefined}</p>
            </div>
        </div>
    );
};

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired,
    headerItem: PropTypes.string,
    Session: PropTypes.object.isRequired
}

export default createContainer(() => {
    return {
        headerItem: Session.get('selectedHeaderItem'),
        Session
    };
}, PrivateHeader);



