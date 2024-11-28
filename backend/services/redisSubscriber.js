import { subscriber } from "../config/redis.js";
import { DIRECT_MESSAGE_UPDATED_CHANNEL } from "../constants.js";

const setupRedisSubscriber = async (io) => {
  try {
    subscriber.subscribe(DIRECT_MESSAGE_UPDATED_CHANNEL, (err, count) => {
      if (err) {
        console.log(
          `Error subscribing to ${DIRECT_MESSAGE_UPDATED_CHANNEL}`,
          err
        );
      }
      console.log(`Subscribed to ${DIRECT_MESSAGE_UPDATED_CHANNEL}`, count);
    });
    subscriber.on("message", (channel, message) => {
      if (channel === DIRECT_MESSAGE_UPDATED_CHANNEL) {
        io.to("").emit(DIRECT_MESSAGE_UPDATED_CHANNEL, {
          message,
        });
      }
    });
  } catch (error) {}
};

export default setupRedisSubscriber;