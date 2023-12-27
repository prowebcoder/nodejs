const http = require("http");
const info = require("./main");
const port = 3000;
const app = http.createServer((req, res) => {
  console.log("Hello, Rahul");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(info))
  res.end();
});

app.listen(port);
