const getRandomUser = () => {
  const userData = [
    {
      "username": "lernantino",
      "email": "lernantino@gmail.com"
    },
    {
      "username": "mikey",
      "email": "mikey@gmail.com"
    },
    {
      "username": "kevin",
      "email": "kevin@aol.com"
    },
    {
      "username": "john",
      "email": "johndoe@yahoo.com"
    },
  ];
  return userData[Math.floor(Math.random() * userData.length)];
}

const thoughtData = () => {
  const thoughts = [
    {
      
    }
  ]
}

// Export the functions for use in seed.js
module.exports = { getRandomUser };
