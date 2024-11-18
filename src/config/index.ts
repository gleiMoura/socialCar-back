import { MongoClient, GridFSBucket } from "mongodb";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const Client = new MongoClient(process.env.MONGO_URL);

async function init() {
  try {
    await Client.connect();
    console.log(chalk.green("Database is connected!"));

    const db = Client.db(process.env.DATABASE);

    return { db }
  } catch (error) {
    console.error(chalk.red("Erro ao conectar com o MongoDB:"), error);
    throw error;
  }
};

export default await init();