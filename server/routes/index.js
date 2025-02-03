const express = require('express');
const router = express.Router();

const getRoute = require('./getRoute');
const postRoute = require('./postRoute');

// 将各个路由添加到 router 上
router.use(getRoute);
router.use(postRoute);

module.exports = router;
