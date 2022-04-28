import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from 'meteor/meteor';

Meteor.publish('allContacts', function publishAllContacts() {
    return ContactsCollection.find(); //  Live Query
})

Meteor.publish('contacts', function publishAllContacts() {
    return ContactsCollection.find({ archived: { $ne: true }}); 
})