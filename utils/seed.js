const connection = require('../config/connection');
const { User, Thought} = require('../models');
const { getRandomUser } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  try {
    console.log('connected');
  
    // Drop existing courses
    await User.deleteMany({});
  
    // Drop existing students
    await Thought.deleteMany({});

    // Add courses to the collection and await the results
    const user = await User.collection.insertOne(getRandomUser());
    const users = await User.collection.insertOne(getRandomUser());
  
    // Log out the seed data to indicate what should appear in the database
    console.table({ user, users });
    console.info('Seeding complete! 🌱');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
});

