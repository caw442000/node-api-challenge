const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
const projectsRouter = require("./data/routers/projectsRouter");
const actionsRouter = require("./data/routers/actionsRouter");

server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);



server.get("/", (req, res) => {
  res.status(200).json({ message: "It is working" });
});

module.exports = server;
