const express = require("express");

const http = require("http");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const genreRoute = require("./routes/genres");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const scraperRoute = require("./routes/scraper");

const cors = require("cors");

const socketio = require("socket.io");

const morganMiddleware = require("./middleware/morgan");

dotenv.config();

const allowed_ips = [
  "http://50.62.182.51:4000",
  "http://admin.haniflix.com:4000",
  "https://admin.haniflix.com",
  "https://haniflix.com",
  "https://www.haniflix.com",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
];

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: allowed_ips,
    methods: ["GET", "POST"],
    allowedHeaders: ["token"],
    credentials: true,
  },
});

const connectDB = require("./startup/db");

connectDB();

const PORT = process.env.PORT || 8800;

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.use(morganMiddleware);

app.options("*", cors({ origin: allowed_ips, optionsSuccessStatus: 200 }));
app.use(cors({ origin: allowed_ips, optionsSuccessStatus: 200 }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/genre", genreRoute);
app.use("/api/lists", listRoute);
app.use("/api/scraper", scraperRoute);

// Import and call the socket setup function
const setupSockets = require("./sockets");
setupSockets(io);

server.listen(PORT, () => {
  console.log("Backend server is running on port 8800!");
});
