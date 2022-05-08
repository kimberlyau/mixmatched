const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    spotifyLookup: {
        type: String,
        required: true,
    },
});

const MusicEventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    cost: {
        type: Number,
        required: true,
    },
    artists: {
        type: [ArtistSchema],
        required: false,
    },
});

// const artistSchema = mongoose.model('artist', ArtistSchema),
// const musicEventSchema =

module.exports = {
    Artist: mongoose.model('artist', ArtistSchema),
    MusicEvent: mongoose.model('musicEvent', MusicEventSchema),
};
