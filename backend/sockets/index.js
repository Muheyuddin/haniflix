const ContinueWatchingList = require("../models/ContinueWatchingList");

const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware function to decode and verify the access token
const decodeAndVerifyToken = async (socket, next) => {
  const token = socket.handshake.headers.token;

  if (!token) {
    return next(new Error("Authorization token is missing"));
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded.id);

    if (!user) {
      // User not found, do not authenticate
      return next(new Error("User not found"));
    }

    // if (user.accessToken !== token) {
    //   // Access token mismatch, emit "forceLogout" event to the current client
    //   return next(new Error("Invalid or mismatched access token"));
    // }
    // Attach the user object to the socket for later use
    socket.user = user;

    // Continue with the connection
    next();
  } catch (error) {
    return next(new Error("Error decoding or verifying access token"));
  }
};

const checkLoginElsewhere = (socket) => {
  const token = socket.handshake.headers.token;

  if (token !== socket.user.accessToken) {
    socket.emit("forceLogout", "Logged in from another location");
  }
};

const setupSocket = (io) => {
  // Use the middleware in Socket.IO connection setup
  io.use((socket, next) => {
    // Decode and verify the access token
    decodeAndVerifyToken(socket, next);
  });

  io.on("connection", (socket) => {
    //after connection check
    checkLoginElsewhere(socket);

    socket.on("updateMovieProgress", async (data) => {
      const { movieId, watchedPercentage, userId } = data;

      // check every progress update
      checkLoginElsewhere(socket);

      try {
        if (watchedPercentage > 97) {
          // If watchedPercentage is above 97%, remove the entry
          await ContinueWatchingList.findOneAndRemove({
            user: userId,
            content: movieId,
          });
        } else {
          // Find or create the user's ContinueWatchingList document
          const continueWatchingList =
            await ContinueWatchingList.findOneAndUpdate(
              { user: userId },
              {
                $addToSet: { content: movieId },
                $set: { watchedPercentage, timestamp: Date.now() },
              },
              { upsert: true, new: true }
            );
        }
      } catch (error) {
        console.error("Error updating progress:", error);
      }
    });
  });
};

module.exports = setupSocket;
