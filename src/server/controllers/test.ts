import express from "express";
import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { Status } from "../../sqlite/models";

const testRouter = express.Router();

testRouter.get("/ping", (_req: Request, res: Response) => {
    res.status(200).send({ ping: 'pong' })
})

testRouter.get("/version", (_req: Request, res: Response) => {
    const pkg: { version: string } = JSON.parse(readFileSync(process.cwd() + '/package.json', 'utf-8'))
    return res.send({ version: pkg.version })
})

testRouter.post("/status", async (_req: Request, res: Response) => {
    const status = await Status.create({ name: "Test", status: "Running", launchTime: new Date() });
    res.json(status).end()
})

export default testRouter
