const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.get('/hotels', hotelController.getAllHotels);
router.post('/hotels', hotelController.createHotel);

module.exports = router;