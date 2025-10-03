
import Video from "../Modals/video.modals.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, thumbnail, videoType } = req.body;

    // Validate required fields
    if (!title || !videoLink || !thumbnail) {
      return res.status(400).json({ success: false, message: "Title, video link, and thumbnail are required" });
    }

    console.log("Authenticated user:", req.user);

    const videoUpload = new Video({
      user: req.user._id,
      title,
      description,
      videoLink,
      thumbnail,
      videoType,
    });

    await videoUpload.save();

    res.status(201).json({
      success: true,
      message: "Video uploaded successfully",
      video: videoUpload,
    });

  } catch (error) {
    console.error("Error saving video:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
};




export  const getVideo = async(req,res)=>{
    try {
        const video =await Video.find().populate('user','channelName profilePic userName createdAt');
        res.status(201).json({success:true,"videos":video});
    } catch(error) {
        res.status(500).json({error:'server error'});
    }

};


export const videoById = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    const video = await Video.findById(id).populate('user','channelName profilePic userName createdAt about');

    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    res.status(200).json({ success: true, video });
  } catch (error) {
    console.error("Error fetching video by ID:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getAllVideoByUserId =async(req,res) => {
    try{
        let {userId} =req.params;
        const video =await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt about');
        res.status(201).json({success:true,"video":video});

    }catch(error){
        res.status(500).json({error: "server error"});
    }
};
