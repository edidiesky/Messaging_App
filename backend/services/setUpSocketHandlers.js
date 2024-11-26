import { publishConnectedUsers } from "./messageServices.js";
import { addUserId } from "./onLineUsers.js";

export const setUpSocketHandlers = (io) => {
  let OnlineUsers = [];
  // io.emit('message','Connected form the backend and testing sending of the data form the socket server')
  io.on("connection", (socket) => {
    console.log("a user connected");

    // io.emit('message','Connected form the backend and testing sending of the data form the socket server')
    socket.on("addUserId", (id) => {
      addUserId(id, socket?.id, OnlineUsers);
      publishConnectedUsers(OnlineUsers?.length);
      io.emit("getAllConnectedUser", OnlineUsers);
    });

    socket.on("sendMessage", ({ receiverid, ...data }) => {
      // get the specific usre u intend to send the message to
      const newuser = getASpecificUser(receiverid, OnlineUsers);
      // console.log(newuser);
      // console.log(newuser?.socketId)
      console.log({ receiverid });
      if (newuser?.socketId) {
        io.to(newuser?.socketId).emit("getMessage", {
          receiverid,
          ...data,
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("🔥: A user disconnected");
      RemoveUser(socket?.id, OnlineUsers);
      io.emit("getAllConnectedUser", OnlineUsers);
    });
  });
};
