import express from "express";
import "dotenv/config";
import connectDB from "./cofiguration/dbconfig.js";
import { responseHandler } from "./middleware/resHandlr.middleware.js";
import loadRoutes from "./routes/index.js";
// Routes


connectDB();

const app = express();

app.use(express.json());//par
app.use(responseHandler);// Middleware
loadRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
