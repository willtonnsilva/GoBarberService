'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
        },
        email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING
        },
        avatar: {
          allowNull: false,
          type: Sequelize.STRING
        },
        password_hash: {
          allowNull: false,
          type: Sequelize.STRING
        },
        provider: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        freezeTableName: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}
