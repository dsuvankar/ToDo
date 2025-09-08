import mongoose from "mongoose";
import { db } from "../config.js";

// Determine connection method
const connectDB = async () => {
  try {
    let dbURI;

    if (db.connectionString) {
      // Use Atlas connection string
      dbURI = db.connectionString;
      console.log("🌐 Connecting to MongoDB Atlas...");
    } else {
      // Fallback to local connection
      dbURI = `mongodb://${db.user ? `${db.user}:${db.password}@` : ""}${
        db.host
      }:${db.port}/${db.name}`;
      console.log("💻 Connecting to local MongoDB...");
    }

    const conn = await mongoose.connect(dbURI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();
