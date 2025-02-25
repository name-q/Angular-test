const express = require('express');
const router = express.Router();

const mockData = require('../utils/mockData');

router.post('/api/getTabList', (req, res) => {
  res.json({
    message: 'This is a mock POST response',
    data: mockData.getTabList()
  });
});

module.exports = router;