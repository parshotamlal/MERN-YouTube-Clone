import express from "express";
import { getAllVideoByUserId, getVideo, uploadVideo, videoById } from "../Controllers/video.controller.js";
import {auth} from "../Middleware/auth.js";

const router = express.Router();



router.post("/video",auth,uploadVideo);
router.get("/allvideo",getVideo);
router.get("/getVideoBy/:id",videoById);
router.get("/:userId/channel",getAllVideoByUserId);


export default router;
