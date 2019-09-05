const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  switch (req.url) {
    case "/image":
      fs.readFile("./image.jpg", (err, data) => {
        res.end(data);
      });
      break;

    case "/stream":
      fs.createReadStream("./image.jpg").pipe(res);
      break;

    case "/video":
      res.writeHead(200, { "Content-type": "video/mp4" });
      fs.createReadStream("./video.mp4").pipe(res);
      break;

    default:
      console.log("no");
      res.end("OK");
      break;
  }
});

app.listen(3000);
