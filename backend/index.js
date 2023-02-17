const { port } = require('./config');

const app = require('./app');
const db = require('./db/models');

// Check the database connection before starting the app
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection Initialized!\nSequelize initialized.');

    // Start listening for connections
    app.listen(port, () => console.log(`Server running on port ${port}...`));
  })
  .catch((err) => {
    console.log('Error connecting to the Database.');
    console.error(err);
  });
