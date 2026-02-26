const express = require('express');
const db = require('./db');
const auth = require('./middleware');
const router = express.Router();

router.post('/create', auth, (req, res) => {
  db.query('INSERT INTO sample(name) VALUES (?)', [req.body.name],
    (err, result) => res.json({ id: result.insertId }));
});

router.get('/list', auth, (req, res) => {
  db.query('SELECT * FROM sample', (err, rows) => res.json(rows));
});

module.exports = router;