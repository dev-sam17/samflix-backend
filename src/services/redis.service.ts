import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

// Get Redis configuration from environment variables
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

// Create Redis client
const redisClient = new Redis(REDIS_URL);

// Handle Redis connection events
redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
  console.error("Redis connection error:", err);
});

// Default TTL for resume progress keys (30 days in seconds)
export const RESUME_PROGRESS_TTL = 60 * 60 * 24 * 30; // 30 days

export default redisClient;
