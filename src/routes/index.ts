import Router from "express";
import loginRouter from "./loginRouter.js";
import registerRouter from "./registerRouter.js";
import quizzRouter from "./quizzRouter.js";

const router = Router();
router.use(loginRouter);
router.use(registerRouter);
router.use(quizzRouter);

export default router;