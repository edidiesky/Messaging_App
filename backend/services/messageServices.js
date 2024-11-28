import { publisher } from "../config/redis.js";
import { CONNECTION_COUNT_UPDATED_CHANNEL, DIRECT_MESSAGE_UPDATED_CHANNEL } from "../constants.js";

export const publishMessage = async (message) => {
  try {
    await publisher.publish(DIRECT_MESSAGE_UPDATED_CHANNEL, message);
    console.log(`Message published to ${NEW_MESSAGE_CHANNEL}`);
  } catch (error) {
    console.log(error);
  }
};


export const publishConnectedUsers = async (message) => {
  try {
    await publisher.publish(CONNECTION_COUNT_UPDATED_CHANNEL, message);
  } catch (error) {
    console.log(error);
  }
};
