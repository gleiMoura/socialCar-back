import { doLogin } from "../controllers/loginController";
import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import loginSchema from "../schemas/loginSchema";

const loginRouter = Router();
loginRouter.post("/login", schemaValidator(loginSchema), doLogin);

export default loginRouter;