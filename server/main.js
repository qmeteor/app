import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
import '../imports/api/links';
import '../imports/api/sendEmail';
import '../imports/api/users';

Meteor.startup(() => {
    process.env.MAIL_URL = "smtp://postmaster@sandbox226d930e4d1a4742be73bc3ec8546e81.mailgun.org:6e4eb4feabbefdca3c9c7d5cc0a802c5@smtp.mailgun.org:587";
});