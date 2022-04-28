import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
    'contacts.insert'({ name, email, imageUrl }) {
      check(name, String);
      check(email, String);
      check(imageUrl, String);
      if(!name) {
        throw new Meteor.Error("Name is required.");
      }
      return ContactsCollection.insert({ name, email, imageUrl, createdAt: new Date() });
    },
    'contacts.archive'({ contactId }) {
      check(contactId, String);
      ContactsCollection.update({ _id: contactId }, { $set: { archived: true } });
    }
  })
