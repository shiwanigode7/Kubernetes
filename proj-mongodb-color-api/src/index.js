const express = require("express");

const { healthRouter } = require('./routes/health');
const { apiRouter } = require('./routes/api');
const { rootRouter } = require('./routes/root');

const app = express();
const port = 80;

const delay_startup = process.env.DELAY_STARTUP === "true";

console.log(`Delay startup : ${delay_startup}`);

app.use('/', healthRouter);
app.use('/api', apiRouter);
app.use('/', rootRouter);

if (delay_startup) {
  const start = Date.now();
  //purposefully block event loop and execution for 60 seconds
  //To illustrate startup probes
  while (Date.now() - start < 60000) {}
}

app.listen(port, () => {
  console.log(`Color API listening on port: ${port}`);
});
