import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());

// Route endpoint to check API Status
app.get("/", (req, res) => {
  res.send("API successfully connectedd");
});
const port = process.env.PORT || 3000;

// start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
