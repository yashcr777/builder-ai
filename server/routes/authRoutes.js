import {Router} from "express";
import { logout, me, register } from "../controllers/AuthController";
import { authMiddleware } from "../middleware/authMiddleware";



const authRouter=Router();

authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.post('/logout',logout)
authRouter.get('/me',authMiddleware,me)

export default authRouter;