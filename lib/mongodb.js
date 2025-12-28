import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("❌ MONGODB_URI not set");

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  // Skip MongoDB connection during build process
  if (typeof window !== 'undefined' || process.env.NEXT_PHASE === 'phase-production-build') {
    return null;
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
    };
    
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then(mongoose => {
        console.log("✅ Connected to MongoDB");
        return mongoose;
      })
      .catch(err => {
        console.error("❌ Error connecting to MongoDB:", err.message);
        // Check for common MongoDB connection errors
        if (err.name === "MongooseServerSelectionError") {
          console.error("⚠️ This could be due to IP whitelist issues. Check your MongoDB Atlas settings.");
          console.error("📖 For help, see: docs/MONGODB_SETUP.md");
        }
        // Reset promise on error to allow retry
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    // Reset promise on error to allow retry
    cached.promise = null;
    throw e;
  }
  
  return cached.conn;
}

global.mongoose = cached;