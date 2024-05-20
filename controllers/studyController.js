const chatSession = require('../config/gemini')

exports.initialChat = async (req, res) => {
  const { topic } = req.body
  const result = await chatSession.sendMessage(`Saya ingin belajar ${topic}`);

  res.json(result.response)
}