// Correct import
import Comment from '../Modals/comment.modals.js';
import mongoose from "mongoose";


// Make function async to use await
export const addComment = async (req, res) => {
    try {
        const { video, message } = req.body;
            console.log("Request body:", req.body);

        if (!video || !message) {
            return res.status(400).json({ error: "Video ID and message are required" });
        }
    


        // Create new comment
        const comment = new Comment({
            user: req.user._id, // coming from auth middleware
            video,
            message,
        });

        await comment.save();

        res.status(201).json({
            success: true,
            message: "Comment added successfully",
            data: comment,
        });

    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ error: "Server error" });
    }
};



export const getCommentByVideoId = async (req, res) => {
    // try {
    //     const { videoId } = req.params;
    //     console.log(req.params);
    //     console.log("Video ID from params:", videoId);



    // } catch (error) {
    //     console.error("Error fetching comments:", error);
    //     res.status(500).json({ error: "Server error" });
    // }

       try {
        // console.log("Full req.params:", req.params);
        const { videoId } = req.params;

        const comments = await Comment.find({ video: videoId }).populate('user','channelName profilePic userName createdAt');
        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }

};
