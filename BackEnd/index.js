// app.js
const express = require('express');
const bodyParser = require('body-parser');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', hotelRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
