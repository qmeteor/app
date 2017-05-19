/**
 * Created by Bien on 2017-03-29.
 */
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {

    const email = user.emails[0].address;

    if (user.username && user.username.length >= 3) {
        console.log("Username is valid");
    } else {
        throw new Meteor.Error(403, 'Username must have at least 3 characters');
    }

    try {
        new SimpleSchema({
            email: {
                type: String,
                regEx: SimpleSchema.RegEx.Email
            }

        }).validate({ email });

    } catch (e) {
        console.log(e)
        throw new Meteor.Error(400, e.message)
    }

    return true;
});