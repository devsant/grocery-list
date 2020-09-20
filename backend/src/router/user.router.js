const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'The user router works',
  });
});

module.exports = router;