

import express from "express";
import { CheckUser, createUser, logOut } from "../Controllers/user.controller.js";
const router = express.Router();



router.post("/signup",createUser);
router.post("/signin",CheckUser);
router.post("/logout",logOut);
export default router;