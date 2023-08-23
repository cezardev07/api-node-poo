import express from "express";
import cors from "cors"
import { router } from "../routes/routes.js";

export class App{
    constructor(){
        this.serve = express()
        this.middleware()
        this.routes()
    }
    middleware(){
        this.serve.use(express.json())
        this.serve.use(cors())
    }
    routes(){
        this.serve.use(router)
    }
}