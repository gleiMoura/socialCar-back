import Router from "express";
import loginRouter from "./loginRouter";
import registerRouter from "./registerRouter";

const router = Router();
router.use(loginRouter)
router.use(registerRouter)

export default router;