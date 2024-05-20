const jwt = require('jsonwebtoken');

exports.generateJWT = (userData) => {
  return jwt.sign(userData, process.env.JWT_SECRET)
}

exports.validateJWT = (token) => {
  return jwt.verify(token);
}