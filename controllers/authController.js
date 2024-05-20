const authModel = require('../models/authModel.js')
const jwtHelper = require('../helpers/jwt.js')

exports.checkAuth = async (req, res) => {
  // have google_id
  const { 
    google_id: googleId,
    name,
    email
   } = req.body


  // check if google id exist or not
  // if exist get data from db and generate json web token
  const existingUser = await authModel.getUserById(googleId)
  if (existingUser.length) {
    const token = jwtHelper.generateJWT({
      id: existingUser[0].id,
      google_id: existingUser[0].google_id,
      name: existingUser[0].name,
      email: existingUser[0].email
    })
    return res.status(200).json({
      status: true,
      message: 'success login',
      data: {
        token
      }
    })
  }


  // // if not exist create user
  await authModel.insertUser({
    google_id: googleId,
    name,
    email
  })

  const token = jwtHelper.generateJWT({
    google_id: googleId,
    name,
    email
  });

  return res.status(201).json({
    status: true,
    message: 'success register',
    data: {
      token
    }
  })
}