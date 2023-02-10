import express,{Router} from 'express'
import { authController } from './controllers/auth.controller';
const router:Router=express.Router();

router.use("/auth",authController)

export default router;