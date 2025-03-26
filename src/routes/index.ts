import Router from "express";
import loginRouter from "./loginRouter.js";
import registerRouter from "./registerRouter.js";
import quizzRouter from "./quizzRouter.js";
import postsRouter from "./postsRouter.js";
import imageRouter from "./createImageRoute.js";


const router = Router();
router.use(loginRouter);
router.use(registerRouter);
router.use(quizzRouter);
router.use(postsRouter);
router.use(imageRouter)

export default router;