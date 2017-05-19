/**
 * Created by Bien on 2017-04-30.
 */

import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import _ from 'lodash';
import { Random } from 'meteor/random';
import { SSR } from 'meteor/meteorhacks:ssr';
import { Session } from 'meteor/session';


Accounts.sendResetPasswordEmail = function(userId, email) {

    console.log(userId);
    // Make sure the user exists, and email is one of their addresses.
    var user = Meteor.users.findOne(userId);

    if (!user) {
        throw new Meteor.Error(400, 'Can\'t find user');
    }
    // pick the first email if we weren't passed an email.
    if(!email && user.emails && user.emails[0]) {
        email = user.emails[0].address;
    }

    // make sure we have a valid email
    if (!email || !_.includes(_.map(user.emails || [], 'address'), email)) {
        throw new Meteor.Error(400, 'No such email for user.');
    }

    var token = Random.secret();
    var when = new Date();
    var tokenRecord = {
        token: token,
        email: email,
        when: when,
        reason: 'reset'
    };

    Meteor.users.update(userId, {$set: {
        "services.password.reset": tokenRecord
    }});

    // before passing to template, update user object with new token
    Meteor._ensure(user, 'services', 'password').reset = tokenRecord;

    var resetPasswordUrl = Accounts.urls.resetPassword(token).replace('/#', '');
    console.log(resetPasswordUrl);

    /**** Customize emails sent from the Accounts system *****/

    function greet(welcomeMsg) {
        return function(user, url) {
            //var greeting = (user.profile && user.profile.name) ? ("Hello " + user.profile.name + ",") : "Hello,";
            return `
            ${welcomeMsg}
            `;
        };
    }

    SSR.compileTemplate('htmlEmail', Assets.getText('email-template.html'));
    //TODO: Remember to replace product names with 'Accounts.emailTemplates.siteName before release to production
    var emailData = {
        name: user.username,
        product: "Beanster.tv",
        team: "Beanster Support",
        url: resetPasswordUrl,
        support_url: Accounts.urls.resetPassword(token)
    };

    //console.log(SSR.render('htmlEmail', emailData));

    Accounts.emailTemplates = {
      from: "Meteor Accounts <no-reply@meteor.com>",
      siteName: Meteor.absoluteUrl().replace(/^https?:\/\//, '').replace(/\/$/, ''),

      resetPassword: {
           subject: function(user) {
                return "How to reset your password on " + "Beanster";
           },
           html: greet(SSR.render('htmlEmail', emailData))
      }
    };

    /***********************-----------***********************/

    var options = {
        to: email,
        from: Accounts.emailTemplates.resetPassword.from
            ? Accounts.emailTemplates.resetPassword.from(user)
            : Accounts.emailTemplates.from,
        subject: Accounts.emailTemplates.resetPassword.subject(user)
    };

    if (typeof Accounts.emailTemplates.resetPassword.text === 'function') {
        options.text =
            Accounts.emailTemplates.resetPassword.text(user, resetPasswordUrl);
    }

    if (typeof Accounts.emailTemplates.resetPassword.html === 'function') {
        options.html =
            Accounts.emailTemplates.resetPassword.html(user, resetPasswordUrl);
    }

    if (typeof Accounts.emailTemplates.headers === 'object') {
        options.headers = Accounts.emailTemplates.headers;
    }
    console.log("just about to send");
    Email.send(options);



};





