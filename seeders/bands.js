'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [{
      name: 'The Useful Books',
      genre: 'Rock',
      available_start_time: '11:00:00',
      end_time: '23:00:00'
    }])
  },