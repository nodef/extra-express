const express = require('./');
const http = require('http');


const app = express();
const server = http.createServer(app);
const sleep = (ms) => new Promise(fres => setTimeout(fres, ms));


app.get('/', express.async(async (req, res) => {
  await sleep(1000);
  res.send('Hello after 1s');
}));
server.listen(8000);
