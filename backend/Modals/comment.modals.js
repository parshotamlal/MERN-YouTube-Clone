import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // ref name should match the user model
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "video", // ref name should match the video model
      required: true,
    },
     message: {
      type: String,
      required:true,
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("comment", commentSchema);