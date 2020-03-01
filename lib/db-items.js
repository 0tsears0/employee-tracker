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

const addEmployee = EmployeeDataObject => {
  return new Promise((resolve, reject) => {
    const postQuery = connection.query('INSERT INTO employee SET ?', EmployeeDataObject, (err, createEmployeeRes) => {
      if (err) {
        console.log("Adding employee failure");
        reject(err);
        return;
      }
      resolve({ message: "Employee added successfully" });
    });
  });
};






module.exports = {
  getAllItems,
  // other functions
};