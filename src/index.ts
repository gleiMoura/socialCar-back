import app from "./app.js";
import db from "./config/index.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT || "5000", () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}!`);
});

db //show that database is working in node!
