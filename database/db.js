import { createConnection } from "mysql2/promise";

const db = createConnection({
  host: "10.10.10.31",
  user: "lautaro",
  password: "LGL",
  database: "kawrapp",
  port: 3306,
  connectionLimit: 10,
});

export const dbConnection = async () => {
  try {
    const connection = await db;
    console.log("Database connected successfully");
    return connection;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}