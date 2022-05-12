// CRUD functionality: Create, read, update, delete
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const { Artist } = require('../models/MusicEvent');

// @route   GET api/musicArtist
// @desc    Get all music artists
// @access  Public
router.get('/', async (req, res) => {
    try {
        const musicArtist = await Artist.find();
        res.json(musicArtist);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/musicArtist
// @desc    Add new music artists
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'Name is required').not().isEmpty(),
            check('spotifyLookup', 'Spotify ID is required').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);

        // If there are errors, send 404 error
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });
        }

        const { name, spotifyLookup } = req.body;

        try {
            const newArtist = new Artist({
                name,
                spotifyLookup,
            });

            const musicArtist = await newArtist.save();
            res.json(musicArtist);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// TODO: Delete
// @route   PUT api/musicArtist/:id
// @desc    Update music artist
// @access  Private
// router.put('/:id', (req, res) => {
//     res.send('Update music artist');
// });

// @route   DELETE api/musicArtist/:id
// @desc    Delete music artist
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let musicArtist = await Artist.findById(req.params.id);

        if (!musicArtist)
            return res.status(404).json({ msg: 'Music Artist Not Found' });

        await Artist.findByIdAndRemove(req.params._id);

        res.json({ msg: 'Music artist removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
