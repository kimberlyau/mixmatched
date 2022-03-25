// CRUD functionality: Create, read, update, delete
const express = require('express');
const router = express.Router();

// @route   GET api/musicEvents
// @desc    Get all music events
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all music events');
});

// @route   POST api/musicEvents
// @desc    Add new music events
// @access  Private
router.post('/', (req, res) => {
    res.send('Add new music event');
});

// @route   PUT api/musicEvents/:id
// @desc    Update music event
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update music event');
});

// @route   DELETE api/musicEvents/:id
// @desc    Delete music event
// @access  Private
router.delete('/', (req, res) => {
    res.send('Delete music event');
});

module.exports = router;
