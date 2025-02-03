const express = require('express');
const router = express.Router();

const mockData = require('../utils/mockData');

router.get('/api/getBannerList', (req, res) => {
  res.json({
    message: 'This is a mock GET response',
    data: mockData.getBannerList()
  });
});

router.get('/api/getChannelList', (req, res) => {
  res.json({
    message: 'This is a mock GET response',
    data: mockData.getChannelList()
  });
});

module.exports = router;
