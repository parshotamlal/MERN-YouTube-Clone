// import express from "express";
// const router = express.Router();
// import { createUser } from "../Controllers/user.controller";

// router.post("/signup", createUser.signup);

// export default router;

import express from "express";
import { CheckUser, createUser } from "../Controllers/user.controller.js";
const router = express.Router();



router.post("/signup",createUser);
router.post("/signin",CheckUser);
export default router;