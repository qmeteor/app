/**
 * Created by Bien on 2017-05-17.
 */
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'; //v3

/* Custom imports */
import App from './../ui/App';
import Signup from '../ui/login/Signup';
import Link from '../ui/login/Link';
import NoMatch from '../ui/login/NoMatch';
import ForgotPassword from '../ui/login/ForgotPassword';
import CheckEmail from '../ui/login/CheckEmail';
import ResetPassword from '../ui/login/ResetPassword';

/*******************/

const unauthenticatedPages = ['/', '/profile', '/videos', '/questions', '/notifications', '/reset-password', '/avatar', '/channels', '/messages', '/stats', '/settings' ];
const authenticatedPages = ['/', '/profile', '/videos', '/questions', '/notifications', '/reset-password', '/avatar', '/channels', '/messages', '/stats', '/settings'];
const forgotPasswordPages = ['resetpassword'];


//TODO: doesn't work exactly as intended

const onEnterPublicPage = () => {
    if(Meteor.userId()) {
        browserHistory.replace('/links');
    }
};

const onEnterPrivatePage = () => {
    if(!Meteor.userId()) {
        browserHistory.replace('/');
    }
};

const onEnterMainPage = (nextState) => {
    //console.log(nextState.location.pathname);
    Session.set('selectedHeaderItem', nextState.location.pathname);
    Session.set('selectedDropDownItem', nextState.location.pathname);

    // if(Meteor.userId()) {
    //     browserHistory.replace('/');
    // } else {
    //
    // }
};

const onEnterDropDown = (nextState) => {
    Session.set('selectedDropDownItem', nextState.location.pathname);
};

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);


    if (isUnauthenticatedPage && isAuthenticated) {
        // var stateObj = { foo: "bar" };
        // history.pushState(undefined, "links", "/links");
        // location.reload();
        browserHistory.replace('/videos');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        // var stateObj = { foo: "bar" };
        // history.pushState(undefined, "home", "/");
        // location.reload();
        browserHistory.replace('/');
    }

    // If on unauthenticated page and logged in, redirect to /links
    //history.push
    // If on authenticated page and not logged in, redirect to /
    //history.push
}

export const routes = (
  <Router history={browserHistory}>
      <Route exact path="/" component={App} onEnter={onEnterMainPage}/>
      <Route path="/links" component={Link} onEnter={onEnterPrivatePage} />
      <Route path="/resetpassword" component={ForgotPassword} />
      <Route path="/checkemail" component={CheckEmail} />
      <Route path="/reset-password/:token" component={ResetPassword} />
      <Route path="/videos" component={App} onEnter={onEnterMainPage}/>
      <Route path="/questions" component={App} onEnter={onEnterMainPage}/>
      <Route path="/notifications" component={App} onEnter={onEnterMainPage}/>
      <Route path="/avatar" component={App} onEnter={onEnterMainPage}/>
      <Route path="/profile" component={App} onEnter={onEnterMainPage}/>
      <Route path="/channels" component={App} onEnter={onEnterMainPage}/>
      <Route path="/messages" component={App} onEnter={onEnterMainPage}/>
      <Route path="/stats" component={App} onEnter={onEnterMainPage}/>
      <Route path="/settings" component={App} onEnter={onEnterMainPage}/>
      {/*<Route path="*" component={NoMatch}/>*/}
      <Route path="*" component={App} onEnter={onEnterMainPage}/>
  </Router>
);

// onEnterPrivatePage - check if user is not logged in. If they're not, redirect to /
Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (isUnauthenticatedPage && isAuthenticated) {
        browserHistory.replace('/videos');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        browserHistory.replace('/');
    }
    console.log('isAuthenticated', isAuthenticated);
});

//redirect to reset email confirmation page.
Tracker.autorun(() => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const forgotPasswordPage = forgotPasswordPages.includes(pathname);
    //const confirmedEmailSentPage = confirmedEmailSentPages.includes(pathname);
    const hasEmail = Session.get('hasEmail');

    if (hasEmail && forgotPasswordPage) {
        browserHistory.push('/checkemail');
    } else {
        //do nothing
    }
});

Meteor.startup(() => {
   ReactDOM.render(routes, document.getElementById('app'));
});
