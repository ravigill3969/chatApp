import mongoose from "mongoose";

const connectDB = async (retryAttempts = 5, retryDelay = 5000) => {
  const connect = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);

      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return conn;
    } catch (error) {
      console.error(`Connection error: ${error.message}`);
      return null;
    }
  };

  // Retry logic
  let attempts = 0;
  while (attempts < retryAttempts) {
    const conn = await connect();
    if (conn) {
      setupEventListeners(conn);
      return conn;
    }
    attempts++;
    console.log(`Retrying connection in ${retryDelay / 1000} seconds...`);
    await new Promise((resolve) => setTimeout(resolve, retryDelay));
  }

  console.error(`Failed to connect after ${retryAttempts} attempts`);
  process.exit(1);
};

const setupEventListeners = (conn) => {
  // Handle connection errors after initial connection
  conn.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
  });

  // Log when connection is disconnected
  conn.connection.on("disconnected", () => {
    console.log("MongoDB connection disconnected");
  });

  // Log when connection is reconnected
  conn.connection.on("reconnected", () => {
    console.log("MongoDB connection reestablished");
  });

  

  // Handle when the Node process is about to exit
  process.on("SIGINT", async () => {
    await conn.connection.close();
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  });
};

export default connectDB;
