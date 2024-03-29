const express = require('express');
// var cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

// // Set up CORS
// app.use(cors());

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/musicEvents', require('./routes/musicEvents'));
app.use('/api/musicArtists', require('./routes/musicArtists'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
