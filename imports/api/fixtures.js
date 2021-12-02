import { Meteor } from 'meteor/meteor';
// import AdminsCollection from './collections/AdminsCollection.js';
import Admins from './collections/AdminsCollection.js';

Meteor.startup(() => {
    const adminData = [
      {
        email: 'deanfsa@cmrcet.ac.in',
        title: 'Dean FSA',
        createdAt: new Date(),
      },
      {
        email: 'principal@cmrcet.ac.in',
        title: 'Principal',
        createdAt: new Date(),
      },
      {
        email: 'sc_president@cmrcet.ac.in',
        title: 'President',
        createdAt: new Date(),
      },
      {
        email: 'sc_vice_president@cmrcet.ac.in',
        title: 'Vice President',
        createdAt: new Date(),
      },
      {
        email: 'sc_secretary@cmrcet.ac.in',
        title: 'Secretary',
        createdAt: new Date(),
      },
      {
        email: 'sc_head_ine@cmrcet.ac.in',
        title: 'Head of Innovation & Entreprenurship',
        createdAt: new Date(),
      },
      {
        email: 'sc_head_snt@cmrcet.ac.in',
        title: 'Head of Science & Technology',
        createdAt: new Date(),
      },
      {
        email: 'sc_head_it@cmrcet.ac.in',
        title: 'Head of Information Technology',
        createdAt: new Date(),
      },
      {
        email: 'sc_head_pr@cmrcet.ac.in',
        title: 'Public Relations',
        createdAt: new Date(),
      },
      {
        email: 'sc_head_anc@cmrcet.ac.in',
        title: 'Head of Arts & Cultural Affairs',
        createdAt: new Date(),
      },
      {
        email: 'sc_head_sports@cmrcet.ac.in',
        title: 'Head of Sports Affairs',
        createdAt: new Date(),
      },
      {
        email: 'sc_head_tnp@cmrcet.ac.in',
        title: 'Training & Placements',
        createdAt: new Date(),
      },
      {
        email: 'sc_head_sw@cmrcet.ac.in',
        title: 'Head of Social Welfare',
        createdAt: new Date(),
      },
    ];

    adminData.forEach(admin => Admins.insert(admin));
});
