const express = require('express');
var cors = require('cors');
const connectDB = require('./config/db');

// // Set up CORS
// app.use(cors());

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to MixMatched' }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/musicEvents', require('./routes/musicEvents'));
app.use('/api/musicArtists', require('./routes/musicArtists'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
