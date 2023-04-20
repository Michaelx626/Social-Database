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
  
    const generateUser = getRandomUser()
    console.log(generateUser);
    // Add courses to the collection and await the results
    const user = await User.collection.insertOne(generateUser);
  
    // Log out the seed data to indicate what should appear in the database
    console.table({ user });
    console.info('Seeding complete! 🌱');
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
});

