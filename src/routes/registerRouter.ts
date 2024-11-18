import { doRegister } from "../controllers/registerController";
import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import registerSchema from "../schemas/registerSchema";

const registerRouter = Router();
registerRouter.post('/register', schemaValidator(registerSchema), doRegister)

export default registerRouter;