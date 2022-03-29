const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entry extends Model {}

Entry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        word: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        definition: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'entry'
    }
);

module.exports = Entry;