import { Router } from "express";
import { savePost } from "../controllers/postController.js";
import multer from "multer"

const upload = multer({ dest: 'uploads/' });

const postsRouter = Router();
postsRouter.post("/post", upload.single('file'), savePost);
//postsRouter.get("/post", sendAllPosts);
//postsRouter.get("/post/user", sendUserPosts);

export default postsRouter;