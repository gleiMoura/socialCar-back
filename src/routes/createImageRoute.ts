import { saveImage } from "controllers/imageController";
import { Router } from "express";
import multer from "multer";

const upload = multer({ dest: 'uploads/' });

const imageRouter = Router();
imageRouter.post("/image", upload.single('file'), saveImage);

export default imageRouter;