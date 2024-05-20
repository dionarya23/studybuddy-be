const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // split the token from the Bearer string
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({
        status: false,
        message: 'No token provided.',
      });
    }

    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        status: false,
        message: 'No token provided.',
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(500).json({
          status: false,
          message: 'Failed to authenticate token.',
        });
      }
      req.user = decoded;
      return next();
    });
}