/**
 * Created by Bien on 2017-05-29.
 */
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

SimpleSchema.defineValidationErrorTransform((error) => {
    return new Meteor.Error(400, error.message);
});