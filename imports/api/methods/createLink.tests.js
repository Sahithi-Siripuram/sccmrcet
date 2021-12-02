import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Links from '../collections/Links.js';
import './methods.js';

if (Meteor.isServer) {
  describe('method: createLink', function () {
    beforeEach(function () {
      Links.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['createLink'];
      assert.equal(Links.find().count(), 1);
    });
  });
}
