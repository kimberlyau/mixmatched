// CRUD functionality: Create, read, update, delete
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const { MusicEvent } = require('../models/MusicEvent');

// @route   GET api/musicEvents
// @desc    Get all music events
// @access  Public
router.get('/', async (req, res) => {
    try {
        const musicEvents = await MusicEvent.find();
        res.json(musicEvents);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/musicEvents
// @desc    Add new music events
// @access  Private
router.post(
    '/',
    [
        auth,
        [
            check('name', 'Name is required').not().isEmpty(),
            check('cost', 'Cost in USD is required').not().isEmpty(),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);

        // If there are errors, send 404 error
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });
        }

        const { name, description, cost, artists } = req.body;

        try {
            const newMusicEvent = new MusicEvent({
                name,
                description,
                cost,
                artists,
            });

            const musicEvent = await newMusicEvent.save();
            res.json(musicEvent);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// TODO: Delete
// @route   PUT api/musicEvents/:id
// @desc    Update music event
// @access  Private
// router.put('/:id', (req, res) => {
//     res.send('Update music event');
// });

// @route   DELETE api/musicEvents/:id
// @desc    Delete music event
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let musicEvent = await MusicEvent.findById(req.params.id);

        if (!musicEvent)
            return res.status(404).json({ msg: 'Music Event Not Found' });

        await MusicEvent.findByIdAndRemove(req.params._id);

        res.json({ msg: 'Music event removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
