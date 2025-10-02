import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/ClerkWebhooks.js";
import userRouter from "./routes/userRoute.js";


const app = express();
app.use(cors());

// middleware setup
app.use(clerkMiddleware());
app.use(express.json()); // enable json req body parsing

// connect to DB
await connectDB();

// API to listen clerk webhook
app.use("/api/clerk", clerkWebhooks)

// define API routes
app.use('/api/user', userRouter) // routes for user functionality

// Route endpoint to check API Status
app.get("/", (req, res) => {
  res.send("API successfully connecteddd");
});
const port = process.env.PORT || 3000;

// start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
