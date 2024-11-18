import app from "./app";
import db from "./config";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT || "5000", () => {
    console.log("Server is running!");
});

db //show that database is working in node!
