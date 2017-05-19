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
import AnswerList from '../ui/QuestionList';
import Signup from '../ui/login/Signup';
import Link from '../ui/login/Link';
import NoMatch from '../ui/login/NoMatch';
import ForgotPassword from '../ui/login/ForgotPassword';
import CheckEmail from '../ui/login/CheckEmail';
import ResetPassword from '../ui/login/ResetPassword';
import Upload from '../ui/login/Upload';
/*******************/

const unauthenticatedPages = ['/', '/signup', '/reset-password'];
const authenticatedPages = ['/links'];
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

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);


    if (isUnauthenticatedPage && isAuthenticated) {
        // var stateObj = { foo: "bar" };
        // history.pushState(undefined, "links", "/links");
        // location.reload();
        browserHistory.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        // var stateObj = { foo: "bar" };
        // history.pushState(undefined, "home", "/");
        // location.reload();
        browserHistory.push('/');
    }

    // If on unauthenticated page and logged in, redirect to /links
    //history.push
    // If on authenticated page and not logged in, redirect to /
    //history.push
}

export const routes = (
  <Router history={browserHistory}>
      <Route exact path="/" component={App} onEnter={onEnterPublicPage}/>
      <Route path="/answer" component={AnswerList}/>
      <Route path="/signup" component={Signup} oneEnter={onEnterPublicPage}/>
      <Route path="/links" component={Link} onEnter={onEnterPrivatePage} />
      <Route path="/resetpassword" component={ForgotPassword} />
      <Route path="/checkemail" component={CheckEmail} />
      <Route path="/reset-password/:token" component={ResetPassword} />
      <Route path="/upload" component={Upload} />
      <Route path="*" component={NoMatch}/>
  </Router>
);

// window.browserHistory = browserHistory; // console display

// onEnterPrivatePage - check if user is not logged in. If they're not, redirect to /
Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (isUnauthenticatedPage && isAuthenticated) {
        // var stateObj = { foo: "bar" };
        // history.pushState(undefined, "links", "/links");
        // location.reload();
        browserHistory.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        // var stateObj = { foo: "bar" };
        // history.pushState(undefined, "home", "/");
        // location.reload();
        browserHistory.push('/');
    }
    // If on unauthenticated page and logged in, redirect to /links
    //history.push
    // If on authenticated page and not logged in, redirect to /
    //history.push
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