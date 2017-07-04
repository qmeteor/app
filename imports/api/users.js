/**
 * Created by Bien on 2017-03-29.
 */
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';



export const validateNewUser = (user) => {
    console.log(user);
    const email = user.emails[0].address;
    const username = user.username;

    new SimpleSchema({
        email: {
            type: String,
            label: '',
            regEx: SimpleSchema.RegEx.Email
        },
        username: {
            type: String,
            min: 3
        }

    }).validate({
        email,
        username
    });

    return true;
};

export const onCreateNewUser = (options, user) => {
    console.log('Added user profile schema IF user object validated.');
    //User profile refer to Meteor Docs for details on how this is published.
    user.profile = options.profile || { };
    // Set roles
    user.roles = ['User'];

    //Account credentials
    user.type = undefined;
    user.etag = undefined;
    user.profileImageUrl = undefined;
    user.first_name = undefined;
    user.last_name = undefined;
    user.headline = undefined;
    user.headline_description = undefined;
    user.position = undefined;
    user.company_organization = undefined;
    user.start_year = undefined;
    user.end_year = undefined;
    user.I_currently_work_here = undefined;
    user.school = undefined;
    user.major = undefined;
    user.minor = undefined;
    user.degree_type = undefined;
    user.graduation_year = undefined;
    user.topic = undefined;
    user.experience = undefined;
    user.location = undefined;
    user.since_year = undefined;
    user.end_year = undefined;
    user.current = false;

    return user;
};

if(Meteor.isServer) {
    Accounts.validateNewUser(validateNewUser);
    Accounts.onCreateUser(onCreateNewUser);
}