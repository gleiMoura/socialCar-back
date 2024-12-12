import { doQuizz, sendAllQuizzes } from "controllers/quizController.js";
import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import quizzSchema from "schemas/quizSchema.js";

const quizzRouter = Router();
quizzRouter.post("/quizz", schemaValidator(quizzSchema), doQuizz);
quizzRouter.get("/quizz", sendAllQuizzes);
/* quizzRouter.get("/quizz/user", sendUserQuizzes);
quizzRouter.delete("/quizz/:id", deleteQuizz); */


export default quizzRouter;