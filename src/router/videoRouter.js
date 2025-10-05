import express from "express"
import { videoHome, view } from "../controller/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/",videoHome);
videoRouter.get("/:id",view);


export default videoRouter;