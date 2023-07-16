const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// extends the Sequelize Model class
class Category extends Model {}

// Initialize the Category model with the defined columns and rules
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      // Define the 'name' column as a STRING, disallow null values (required field).
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    // Specify that the table name should match the model name in lowercase
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

