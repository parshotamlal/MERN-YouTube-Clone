import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // ref name should match the user model
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "video", // ref name should match the video model
      required: true,
    },
     massage: {
      type: String,
      required:true,
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("comment", videoSchema);