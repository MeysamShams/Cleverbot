import {readFileSync} from 'fs'

import {createServer as createHttpServer} from 'http'
import {createServer as createHttpsServer} from 'https'

import express,{Express} from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors';
import routes from './routes'
import { setResponseStatusCode } from './middlewares/setResponseStatusCode.middleware';

dotenv.config();
// ssl 


const app:Express=express();

app.use(cors());
app.use(express.json())
app.use(setResponseStatusCode)
app.use(routes)

// http server
const httpServer=createHttpServer(app)
httpServer.listen(
    parseInt(process.env.HTTP_PORT||"5000"),
    "0.0.0.0",
    ()=>console.log(`Http server is running on port ${process.env.HTTP_PORT}`)
)

// https server
if(process.env.PRIVATE_KEY && process.env.CERTIFICATE){
    const privateKey  = readFileSync(process.env.PRIVATE_KEY||"", 'utf8');
    const certificate = readFileSync(process.env.CERTIFICATE||"", 'utf8');
    const httpsServer=createHttpsServer({key:privateKey,cert:certificate},app)
    httpsServer.listen(
        parseInt(process.env.HTTPS_PORT||"600"),
        "0.0.0.0",
        ()=>console.log(`Https server is running on port ${process.env.HTTPS_PORT}`)
    )
    
}