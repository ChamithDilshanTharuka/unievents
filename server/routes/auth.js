const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

//Signup Route

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed Password:', hashedPassword);

        const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        // Save the user to the database
        db.query(query, [email, hashedPassword], (err, result) => {
            if (err) return res.status(500).json({ message: 'Signup failed' });
            res.status(201).json({ message: 'User registed successfully' });
        });
    }

    catch (err) {
        res.status(500).json({ message: "Error Occured" });
    }
});

//Login Route

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT *  FROM users WHERE email = ? ';
    db.query(query, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });
                res.status(200).json({ token });
            }
            else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
    });
});

module.exports = router;