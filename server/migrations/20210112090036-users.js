'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      login: {
        type: Sequelize.STRING,
        field: 'login',
        allowNull: true,
      },
      id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        allowNull: false,
      },
      'node_id': {
        type: Sequelize.STRING,
        field: 'node_id',
        allowNull: true,
      },
      'avatar_url': {
        type: Sequelize.STRING,
        field: 'avatar_url',
        allowNull: true,
      },
      'gravatar_id': {
        type: Sequelize.STRING,
        field: 'gravatar_id',
        allowNull: true,
      },
      'url': {
        type: Sequelize.STRING,
        field: 'url',
        allowNull: true,
      },
      'html_url': {
        type: Sequelize.STRING,
        field: 'html_url',
        allowNull: true,
      },
      'followers_url': {
        type: Sequelize.STRING,
        field: 'followers_url',
        allowNull: true,
      },
      'following_url': {
        type: Sequelize.STRING,
        field: 'following_url',
        allowNull: true,
      },
      'gists_url': {
        type: Sequelize.STRING,
        field: 'gists_url',
        allowNull: true,
      },
      'starred_url': {
        type: Sequelize.STRING,
        field: 'starred_url',
        allowNull: true,
      },
      'subscriptions_url': {
        type: Sequelize.STRING,
        field: 'subscriptions_url',
        allowNull: true,
      },
      'organizations_url': {
        type: Sequelize.STRING,
        field: 'organizations_url',
        allowNull: true,
      },
      'repos_url': {
        type: Sequelize.STRING,
        field: 'repos_url',
        allowNull: true,
      },
      'events_url': {
        type: Sequelize.STRING,
        field: 'events_url',
        allowNull: true,
      },
      'received_events_url': {
        type: Sequelize.STRING,
        field: 'received_events_url',
        allowNull: true,
      },
      'type': {
        type: Sequelize.STRING,
        field: 'type',
        allowNull: true,
      },
      'site_admin': {
        type: Sequelize.BOOLEAN,
        field: 'site_admin',
        allowNull: true,
      },
      'name': {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: true,
      },
      'company': {
        type: Sequelize.STRING,
        field: 'company',
        allowNull: true,
      },
      'blog': {
        type: Sequelize.STRING,
        field: 'blog',
        allowNull: true,
      },
      'location': {
        type: Sequelize.STRING,
        field: 'location',
        allowNull: true,
      },
      'email': {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: true,
      },
      'hireable': {
        type: Sequelize.BOOLEAN,
        field: 'hireable',
        allowNull: true,
      },
      'bio': {
        type: Sequelize.STRING,
        field: 'bio',
        allowNull: true,
      },
      'twitter_username': {
        type: Sequelize.STRING,
        field: 'twitter_username',
        allowNull: true,
      },
      'public_repos': {
        type: Sequelize.INTEGER,
        field: 'public_repos',
        allowNull: true,
      },
      'public_gists': {
        type: Sequelize.INTEGER,
        field: 'public_gists',
        allowNull: true,
      },
      'followers': {
        type: Sequelize.INTEGER,
        field: 'followers',
        allowNull: true,
      },
      'following': {
        type: Sequelize.INTEGER,
        field: 'following',
        allowNull: true,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};