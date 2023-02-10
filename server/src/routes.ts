import { profileController } from './controllers/profile.controller';
import express,{Router} from 'express'
import { jwtAuth } from './middlewares/auth.middleware';
import { authController } from './controllers/auth.controller';
const router:Router=express.Router();

router.use("/auth",authController)

router.use("/profile",jwtAuth,profileController)
export default router;