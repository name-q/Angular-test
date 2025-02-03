const express = require('express');
const app = express();
const port = 3210;

// 允许处理 JSON 格式的 POST 请求
app.use(express.json());

// 导入所有路由
const routes = require('./routes');

// 将路由挂载到应用上
app.use(routes);

// 启动服务
app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});