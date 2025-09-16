import express from "express";
import dotenv from "dotenv";
import connectDB from "./cofiguration/dbconfig.js";
import { responseHandler } from "./middleware/resHandlr.middleware.js";

// Routes
import adminRoutes from "./routes/admin.routes.js";
import buyerRoutes from "./routes/buyer.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(responseHandler);


// API Routes
app.use("/admin", adminRoutes);
app.use("/buyer", buyerRoutes);
app.use("/seller", sellerRoutes);
app.use("/auth", authRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
