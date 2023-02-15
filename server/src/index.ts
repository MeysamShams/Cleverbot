import express,{Express} from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors';
import routes from './routes'
import { setResponseStatusCode } from './middlewares/setResponseStatusCode.middleware';

dotenv.config();

const app:Express=express();

app.use(cors());
app.use(express.json())
app.use(setResponseStatusCode)
app.use(routes)

app.listen(
    process.env.SERVER_PORT,
    ()=>console.log(`Server is running on port ${process.env.SERVER_PORT}`)
)