
const mongoose = require('../config/database');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
