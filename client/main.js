import React from 'react'
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { browserHistory } from 'react-router';


import { routes } from './../imports/routes/routes';

// Watch for change in header update url
Tracker.autorun(() => {
    const selectedHeaderItem = Session.get('selectedHeaderItem');

    if(selectedHeaderItem === '/watch') {
        browserHistory.replace(`/watch`);
    } else if (selectedHeaderItem === '/respond') {
        browserHistory.replace(`/respond`);
    } else if (selectedHeaderItem === '/notifications') {
        browserHistory.replace(`/notifications`);
    } else if (selectedHeaderItem === '/profile') {
        browserHistory.replace(`/profile`);
    }

});

Meteor.startup(() => {
    Session.set('selectedHeaderItem', Session.get('selectedHeaderItem'));
    ReactDOM.render(routes, document.getElementById('app'));
});