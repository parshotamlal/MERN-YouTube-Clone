import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error(" MongoDB connection failed:", err);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
