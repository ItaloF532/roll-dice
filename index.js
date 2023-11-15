const http = require("http");

const port = 3000;

const roolDice = (faces) => {
  return Math.floor(Math.random() * faces) + 1;
};

const requestListener = function (req, res) {
  if (req.url.includes("roll")) {
    const param = req?.url?.split("faces=")[1];
    let faces = 20;

    if (!isNaN(param) && typeof param === "number") faces = param;

    const rolledDiceResult = roolDice(faces);
    res.writeHead(200);
    res.end(`Resultado: ${rolledDiceResult}`);
  } else {
    res.writeHead(404);
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
