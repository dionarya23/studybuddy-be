const db = require('../config/db');

exports.getUserById = (googleId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE google_id = ?', [googleId], (error, result) => {
      if (error) {
        reject(error); // Reject the promise with the error
      } else {
        resolve(result); // Resolve the promise with the result
      }
    });
  });
};

exports.insertUser = ({ google_id, name, email }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (google_id, name, email) VALUES (?, ?, ?)', [google_id, name, email], (error, result) => {
      if (error) {
        reject(error); // Reject the promise with the error
      } else {
        resolve(result); // Resolve the promise with the result
      }
    });
  });
};
