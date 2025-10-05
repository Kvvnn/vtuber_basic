import express from "express"
import morgan from "morgan"
import globalRouter from "./router/globalRouter.js";
import videoRouter from "./router/videoRouter.js";

const PORT = 4000;

const app = express();

app.set("view engine","pug");
app.set("views", process.cwd()+"/src/views");

const logger = morgan('dev');

app.use(logger)
app.use("/",globalRouter);
app.use("/video",videoRouter);

const handleListening = () => console.log(`Server listening on http://localhost:${PORT} ✅`);

app.listen(PORT,handleListening);

