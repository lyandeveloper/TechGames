'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      banner: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      conteudo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('posts');
  },
};
