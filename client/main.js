import React from 'react'
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { browserHistory } from 'react-router';


import { routes } from './../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';

// Watch for change in header update url
Tracker.autorun(() => {
    const selectedHeaderItem = Session.get('selectedHeaderItem');

    if(selectedHeaderItem === '/videos') {
        browserHistory.replace(`/videos`);
    } else if (selectedHeaderItem === '/questions') {
        browserHistory.replace(`/questions`);
    } else if (selectedHeaderItem === '/notifications') {
        browserHistory.replace(`/notifications`);
    } else if (selectedHeaderItem === '/avatar') {
        browserHistory.replace(`/avatar`);
    }

});


Tracker.autorun(() => {
    const selectedDropDownItem = Session.get('selectedDropDownItem');

    if(selectedDropDownItem === '/profile') {
        browserHistory.replace(`/profile`);
    } else if (selectedDropDownItem === '/channels') {
        browserHistory.replace(`/channels`);
    } else if (selectedDropDownItem === '/messages') {
        browserHistory.replace(`/messages`);
    } else if (selectedDropDownItem === '/stats') {
        browserHistory.replace(`/stats`);
    } else if (selectedDropDownItem === '/settings') {
        browserHistory.replace(`/settings`)
    }
});

Meteor.startup(() => {
    Session.set('selectedHeaderItem', Session.get('selectedHeaderItem'));
    Session.set('selectedDropDownItem', Session.get('selectedDropDownItem'));
    ReactDOM.render(routes, document.getElementById('app'));
});