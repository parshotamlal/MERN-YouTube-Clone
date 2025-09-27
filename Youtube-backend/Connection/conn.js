import mongoose from "mongoose";

const DB = "mongodb://127.0.0.1:27017/Youtube-backend";

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
