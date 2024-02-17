import express from "express";
import { getProfile, likeProfile,getLikes } from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthUser.js";

const router = express.Router();

router.get('/profile/:username',getProfile);
router.get('/likes',ensureAuthenticated,getLikes);
router.post('/like/:username',ensureAuthenticated,likeProfile)

export default router;