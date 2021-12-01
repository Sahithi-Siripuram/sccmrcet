// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Links from './Links.js';

if (Meteor.isServer) {
  describe('links collection', function () {
    it('insert correctly', function () {
      const linkId = Links.insert({
        studentRollNo: '18h51a0584',
        studentName: "sahithi",
        grevience:"testing",
      });
      const added = Links.find({ _id: linkId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'links');
      assert.equal(count, 1);
    });
  });
}
