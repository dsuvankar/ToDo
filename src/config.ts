import dotenv from "dotenv";

dotenv.config();

export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

export const db = {
  // Primary: Atlas connection string
  connectionString: process.env.MONGODB_URI,

  // Fallback: Local MongoDB (keep for backup)
  name: process.env.DB_NAME || "todoapp",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "27017",
  user: process.env.DB_USER || "",
  password: process.env.DB_USER_PWD || "",
};

export const corsUrl = process.env.CORS_URL;
