Support methods for [express package].
> Need to handle error from express routes using async?<br>

```javascript
const express = require('extra-express');
const http = require('http');


const app = express();
const server = http.createServer(app);
const sleep = (ms) => new Promise(fres => setTimeout(fres, ms));


app.get('/', express.async(async (req, res) => {
  await sleep(1000);
  res.send('Hello after 1s');
}));
server.listen(8000);
```
<br>


## reference

```javascript
const express = require('extra-express');
// : includes all functions of "express"


express.async(callback);
: callback(req, res, [next])
```
<br>


[![nodef](https://merferry.glitch.me/card/extra-express.svg)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-express)

[express package]: https://www.npmjs.com/package/express
