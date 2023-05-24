const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');
const sequelize = require('./config/connection');

const sequelize = new sequelize (
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS
)
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
