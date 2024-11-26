export const addUserId = (userId, socketId, OnlineUsers) => {
  // check if the object: {userid, socketId} is being found in the usres array
  // if not found add it to the OnlineUsers array
  const userExits = OnlineUsers.find((user) => user.userId === userId);
  if (!userExits) {
    OnlineUsers.push({ userId, socketId });
  }
};

export const RemoveUser = (socketId, OnlineUsers) => {
  // check if the object: {userid, socketId} is being found in the usres array
  // if not found add it to the OnlineUsers array
  OnlineUsers = OnlineUsers?.filter((user) => user?.socketId !== socketId);
};

export const getASpecificUser = (userId, OnlineUsers) => {
  // console.log(OnlineUsers)

  // return OnlineUsers?.filter((obj) => obj.userId === userId)
  const newuser = OnlineUsers.find((user) => user.userId === userId);
  return newuser;
};
