import { PrismaClient } from "@prisma/client";
import { Configuration, OpenAIApi } from "openai";

// db configuration
export const prisma=new PrismaClient()

// open ai configuration
const openaiConfig=new Configuration({
    apiKey:process.env.OPENAI_TOKEN
})
export const oa={
    openai:new OpenAIApi(openaiConfig),
    modelConfiguration:{
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 3000,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
    }
}