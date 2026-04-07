import express from "express";
import connectDB from "./Connection/conn.js";
import AuthRoutes from "./Routes/user.route.js";
import VideoRoutes from "./Routes/video.route.js"; // ✅ fixed "Import" -> "import"
import cookieParser from "cookie-parser";
import CommentRoutes from "./Routes/comment.route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;


// app.use(cors ({
//     origin :'http://localhost:5173',
//     credentials: true
// }));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());
app.use(cookieParser());



// Use auth routes
app.use('/auth', AuthRoutes);
app.use('/api', VideoRoutes);
app.use('/commentapi',CommentRoutes);

connectDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:5000`);
});
