const express = require('express');
const router = express.Router();

router.post('/mock-post', (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: 'This is a mock POST response',
    data: { name, age }
  });
});

module.exports = router;