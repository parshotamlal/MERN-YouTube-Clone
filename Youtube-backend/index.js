import express from "express";
import connectDB from "./Connection/conn.js";
import AuthRoutes from "./Routes/user.route.js";
import VideoRoutes from "./Routes/video.route.js"; // ✅ fixed "Import" -> "import"
import cookieParser from "cookie-parser";
import CommentRoutes from "./Routes/comment.route.js";
import cors from "cors";


const app = express();


app.use(cors ({
    origin :' http://localhost:5173',
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());



// Use auth routes
app.use('/auth', AuthRoutes);
app.use('/api', VideoRoutes);
app.use('/commentapi',CommentRoutes);

connectDB();

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
