const { DataTypes, Model } = require('sequelize')
const db = require('../core/database')

class Users extends Model {}

Users.init({
    login: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    'node_id': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'avatar_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'gravatar_id': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'html_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'followers_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'following_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'gists_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'starred_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'subscriptions_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'organizations_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'repos_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'events_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'received_events_url': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'site_admin': {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    blog: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hireable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'twitter_username': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'public_repos': {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    'public_gists': {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    followers: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    following: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, { sequelize: db.connect(), modelName: 'user', timestamps: false })

module.exports = Users