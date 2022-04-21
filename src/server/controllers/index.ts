import express from "express";
import testRouter from "./test";

const rootRouter = express.Router();

rootRouter.use("/test", testRouter);

export default rootRouter;