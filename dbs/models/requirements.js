const mongoose = require('mongoose')

let requirementsSchema = new mongoose.Schema({
  product: String,
  reviewer: String,
  name: String,
  degree: String,
  lastTime: String,
  description: String,
  stand: String,
  keywordArr: Array,
})

module.exports = mongoose.model('Requirements',requirementsSchema)