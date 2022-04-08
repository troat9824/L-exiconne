const seedUsers = require('./user-seeds');
const seedWords = require('./word-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('seeding...');

  await seedUsers();
  console.log('Users seeded');

  await seedWords();
  console.log('Words seeded');

  process.exit(0);
};

seedAll();
