import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const testConnection = async () => {
  try {
    console.log("🔗 Testing MongoDB Atlas connection...");

    const connectionString = process.env.MONGODB_URI;

    if (!connectionString) {
      throw new Error("MONGODB_URI not found in .env file");
    }

    console.log("📡 Connecting to Atlas...");

    await mongoose.connect(connectionString);

    console.log("✅ Successfully connected to MongoDB Atlas!");
    console.log("📊 Database:", mongoose.connection.name);
    console.log("🌐 Host:", mongoose.connection.host);

    // List collections
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log(
      "📁 Collections:",
      collections.map((c) => c.name)
    );

    await mongoose.connection.close();
    console.log("✅ Test completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
    process.exit(1);
  }
};

testConnection();
