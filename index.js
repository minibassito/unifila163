const path = require("path");
const express = require("express");
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

//static files
app.use(express.static(path.join(__dirname, "public")));
console.log();

//start server
const server = app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});

//WebSockets
const SocketIO = require("socket.io");
const io = SocketIO(server);

io.on("connection", (socket) => {
    console.log("New Connection", socket.id);

    socket.on("datos:captura", (data) => {
        io.sockets.emit("datos:captura", data);        
    })
});