import app from "./app.js";
import db from "./config/index.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT || "5000", () => {
    console.log("Server is running!");
});

db //show that database is working in node!
