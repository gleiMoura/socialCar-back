import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import router from "routes/index";
import errorHandler from "middlewares/errorValidator";;

const app = express();

/* app.use(cors({
    origin: ""
})); */
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;
