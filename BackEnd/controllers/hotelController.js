const Hotel = require('../models/hotel');

exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createHotel = async (req, res) => {
    const { name, location } = req.body;
    try {
        const newHotel = new Hotel({ name, location });
        await newHotel.save();
        res.status(201).json(newHotel);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};