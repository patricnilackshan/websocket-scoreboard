const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const FRONTENDPORT = 5173;
const BACKENDPORT = 5000;
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: `http://localhost:${FRONTENDPORT}`,
    // Replace 5173 with your Frontend port number
  },
});

// For testing purposes
app.get("/", (req, res) => {
  res.send("socket.io server is running");
});

// Array to store player scores
let playerScores = [];

// Socket connection
io.on("connection", (socket) => {
  console.log("\nSocket ID ", socket.id, "connected...");
  console.log("\nActive connections:", io.sockets.sockets.size);
  // Log the number of active connections every minute
  setInterval(() => {
    console.log("\nActive connections:", io.sockets.sockets.size);
  }, 60000);
  playerScores && io.emit("playerScores", playerScores);

  socket.on("scores", (scores) => {
    playerScores.push({ ...scores, id: socket.id });
    console.log("\n Updated playerScores", playerScores);
    io.emit("playerScores", playerScores);
  });
});

// Start the server
httpServer.listen(BACKENDPORT, () => {
  console.log(
    `socket.io backend server\nRunning on http://localhost:${BACKENDPORT}`
  );
});
