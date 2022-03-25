const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
    '/',
    [
        // Validation checks
        check('name', 'Please add name').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        // If there are errors, send 404 error
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });
        }

        // Upon successful validation
        const { name, email, password } = req.body;

        try {
            // Mongoose findOne function
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            // Create user object
            user = new User({
                name,
                email,
                password,
            });
            const salt = await bcrypt.genSalt(10);

            // Hash password
            user.password = await bcrypt.hash(password, salt);

            // Save to MongoDB
            await user.save();

            // Object to send in JWT
            const payload = {
              user: {
                id: user.id
              }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                    expiresIn: 36000,
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
