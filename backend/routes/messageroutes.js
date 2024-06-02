import express from 'express';
import{sendMessage,getMessages} from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

// protect Route:- to check the user is logged in or not 
// it work like a authentication
router.get("/:id",protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage);
export default router;