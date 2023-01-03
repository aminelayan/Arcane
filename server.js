const express = require("express");
const cors = require("cors");
const cookies = require("cookie-parser");
const port = 8000;
const socketIO = require('socket.io');
const app = express();
require("./server/config/mongoose.config");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// const server = http.createServer(app);
// const io = socketIO(server);

// io.on("connection", client => {
//   client.on('update:client', () => {
//     client.broadcast.emit('update:server', true);
//   })
//   client.on("disconnect", () => console.log("Client disconnected"));
// });


app.use(express.json());
app.use(cookies());
app.use(express.urlencoded({extended:true}));
require("./server/routes/user.routes")(app);
require("./server/routes/polls.routes")(app);

app.listen(port, () => console.log("listining on port", port));
