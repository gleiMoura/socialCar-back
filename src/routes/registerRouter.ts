import { doRegister, insertProfileImage } from "../controllers/registerController";
import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import registerSchema from "../schemas/registerSchema";
import multer from "multer"

const upload = multer({ dest: 'uploads/' });

const registerRouter = Router();

registerRouter.post('/register', schemaValidator(registerSchema), doRegister)
registerRouter.put('/register/profile', upload.single('file'), insertProfileImage)

export default registerRouter;