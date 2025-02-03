const express = require('express');
const app = express();
const port = 3210;

// 允许处理 JSON 格式的 POST 请求
app.use(express.json());

// 导入路由
const getRoute = require('./routes/getRoute');
const postRoute = require('./routes/postRoute');

// 使用路由
app.use(getRoute);
app.use(postRoute);

// 启动服务
app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});