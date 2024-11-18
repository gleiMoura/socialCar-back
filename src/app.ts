import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import router from "routes/index";
import errorHandler from "middlewares/errorValidator";;

const app = express();

app.use(cors({
    origin: "https://frontuol.onrender.com"
}));
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;
