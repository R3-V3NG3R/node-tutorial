const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("Content-Type", "text/html");
  if (url == "/") {
    res.write(
      "<html><head><title>Enter Message</title></head><form action='/message' method='POST'><input type='text' name='message' placeholder='Message' /><button type='submit'>Send</button></form></body></html>"
    );
    return res.end();
  }

  if (url == "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.write(
    "<html><head><title>Welcom to My Node Server</title></head><body><h1>Welcom to node.js</h1></body></html>"
  );
  res.end();
};

module.exports = requestHandler;
