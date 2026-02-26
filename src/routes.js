const express = require('express');
const db = require('./db');
const auth = require('./middleware');

const router = express.Router();

router.post('/create', auth, (req, res) => {
  const { name } = req.body;
  db.query(
    'INSERT INTO sample (name) VALUES (?)',
    [name],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, name });
    }
  );
});

router.get('/list', auth, (req, res) => {
  db.query('SELECT * FROM sample', (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

module.exports = router;