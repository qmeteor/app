/**
 * Created by Bien on 2017-05-16.
 */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';


import SearchBar from './SearchBar';
import Login from './login/Login';
import DropDown from './avatar/DropDown';


export const PrivateHeader = (props) => {

    let classNameVideos = 'button--link-text';
    let classNameQuestions = 'button--link-text';
    let classNameNotifications = 'button--link-text notification';
    let classNameAvatar = 'button--link-text';

    if (props.Session.get('selectedHeaderItem') === '/videos') {
        classNameVideos = 'button--link-text selected';
    } else if (props.Session.get('selectedHeaderItem') === '/questions') {
        classNameQuestions = 'button--link-text selected';
    } else if (props.Session.get('selectedHeaderItem') === '/notifications') {
        classNameNotifications = 'button--link-text notification selected';
    } else if (props.Session.get('selectedHeaderItem') === '/avatar') {
        classNameAvatar = 'button--link-text';
    } else {
        classNameVideos = 'button--link-text selected';
    }


    if(!!Meteor.userId()) {
        return (
            <div className="header">
                <div className="header__content">
                    <div className="logo_wrapper">
                        <img src="#" className="logo" alt="LOGO"/>
                    </div>
                    <div className="search_wrapper">
                        <SearchBar classname="header__searchbar"/>
                    </div>
                    <div className="avatar_wrapper">
                        <DropDown/>
                    </div>
                    <button className={classNameVideos} selected onClick={() => {
                        console.log('videos');
                        props.Session.set('selectedHeaderItem', '/videos');
                    }}>Videos</button>
                    <button className={classNameQuestions} onClick={() => {
                        console.log('questions');
                        props.Session.set('selectedHeaderItem', '/questions');
                    }}>Questions</button>
                    <button className={classNameNotifications} onClick={() => {
                        console.log('notifications');
                        props.Session.set('selectedHeaderItem', '/notifications');
                    }}>Notifications</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="header">
                <div className="header__content">
                    <div className="logo_wrapper">
                        <img src="#" className="logo" alt="LOGO"/>
                    </div>
                    <div className="search_wrapper">
                        <SearchBar classname="header__searchbar"/>
                    </div>
                    <Login classNameAvatar={classNameAvatar} />
                    <button className={classNameVideos} selected onClick={() => {
                        console.log('videos');
                        props.Session.set('selectedHeaderItem', '/videos');
                    }}>Videos</button>
                    <button className={classNameQuestions} onClick={() => {
                        console.log('questions');
                        props.Session.set('selectedHeaderItem', '/questions');
                    }}>Questions</button>
                    <button className={classNameNotifications} onClick={() => {
                        console.log('notifications');
                        props.Session.set('selectedHeaderItem', '/notifications');
                    }}>Notifications</button>
                </div>
            </div>
        );
    }

};

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired,
    headerItem: PropTypes.string,
    Session: PropTypes.object.isRequired,
}

export default createContainer(() => {
    const selectedHeaderItem = Session.get('selectedHeaderItem');

    return {
        headerItem: selectedHeaderItem,
        Session,
    };
}, PrivateHeader);



