import express from "express";
import rootRouter from "./controllers";

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/', rootRouter)

export { server };