import express from "express";
import { sendMessage ,getMessages} from "../controllers/message.controller.js";
import protect from "../middleware/protectRoute.js";


const router = express.Router();

router.post("/send/:id", protect, sendMessage);
router.get("/:id", protect, getMessages);

export default router;
