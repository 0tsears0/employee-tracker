const connection = require('../config/connection');

// create function that returns promise to sql query and get all items
const getAllItems = () => {
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM items', (err, itemData) => {
      if (err) {
        console.log("connection error");
        reject(err);
        return;
      }
      resolve(itemData);
    });
    console.log(getQuery.sql);
  });
};

