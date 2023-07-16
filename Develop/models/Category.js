const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
    },
    product_name: {
      DataTypes.DECIMAL,
      allowNull: false,
    },
    category_id: {
      DataTypes.INTEGER,
    },
    tag: {
      DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
    },
    tag_name: {
      DataTypes.STRING,
    },
    ProductTag: {
      DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
    },
    product_id: {
      DataTypes.INTEGER,

    },
    tag_id: {
      DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
