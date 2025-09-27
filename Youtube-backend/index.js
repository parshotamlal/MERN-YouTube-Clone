import express from "express";
import connectDB from "./Connection/conn.js";
import AuthRoutes from "./Routes/user.route.js";

const app = express();
app.use(express.json());

// Use auth routes
app.use('/auth', AuthRoutes);


connectDB();

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
