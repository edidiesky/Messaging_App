import { Server } from "socket.io";
import dotenv from "dotenv";
import setupRedisSubscriber from "../services/redisSubscriber.js";
import { setUpSocketHandlers } from "../services/setUpSocketHandlers.js";
// import { setupRedisSubscriber } from "../services/redisSubscriber";

dotenv.config();

export const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.WEB_ORIGIN,
    },
  });
  setUpSocketHandlers(io);
  setupRedisSubscriber(io);
  return io;
};
