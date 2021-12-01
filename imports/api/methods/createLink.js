import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Links from '../collections/Links.js';

Meteor.methods({
  'createLink'(studentRollNo, studentName, grevience) {
    check(studentRollNo, String);
    check(studentName, String);
    check(grevience, String);
    return Links.insert({
      studentRollNo,
      studentName,
      grevience,
      createdAt: new Date(),
    });
  },
});
