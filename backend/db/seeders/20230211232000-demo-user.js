'use strict';
const bcrypt = require('bcryptjs');
const user = require('../models/user');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'john.doe@test.com',
        username: 'john.doe',
        passwordHash: bcrypt.hashSync('password'),
        phoneNumber: '777-777-7777',
        avatarUrl: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mary.jane@test.com',
        username: 'mary.jane',
        passwordHash: bcrypt.hashSync('password'),
        phoneNumber: '222-232-4545',
        avatarUrl: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'test.user@test.com',
        username: 'test.user',
        passwordHash: bcrypt.hashSync('password'),
        phoneNumber: '297-456-1230',
        avatarUrl: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['john.doe', 'mary.jane'] }
    }, {});
  }
};
