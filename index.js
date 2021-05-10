const express = require('express');
const app = express();
const httpPort = 8000;
const httpServer = app.listen(httpPort, () => console.log(`Listening to port: ${httpPort}`));

app.use(express.static(__dirname + '/build'));

app.get('', (req, res) => {
  res.sendFile('./build/index.html');
});
