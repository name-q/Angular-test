const express = require('express');
const router = express.Router();

const mockData = require('../utils/mockData');

router.get('/mock-get', (req, res) => {
  res.json({
    message: 'This is a mock GET response',
    data: mockData.getUserData()
  });
});

module.exports = router;
