import { Meteor } from 'meteor/meteor';
import Links from './collections/Links.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        studentRollNo: '18h51a0584',
        studentName: "sahithi",
        grevience:"testing",
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
});
