// import models
const models = require('../models');
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryId', // This will add a 'categoryId' field to the Product model to establish the association
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryId', // This refers to the 'categoryId' field in the Product model
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // This indicates the join table that connects Products and Tags
  foreignKey: 'productId', // The foreign key in the join table that references the Product model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // This indicates the join table that connects Tags and Products
  foreignKey: 'tagId', // The foreign key in the join table that references the Tag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
