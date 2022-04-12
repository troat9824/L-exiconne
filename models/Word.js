const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Word extends Model {}

Word.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        word: {
            type: DataTypes.STRING,
            allowNull: false
        },
        definition: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'word'
    }
);

module.exports = Word;