import express from "express"
import { home, live2d } from "../controller/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/",home);
globalRouter.get("/live2d", live2d);

export default globalRouter