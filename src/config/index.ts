import { config } from "dotenv"

config()

export const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  CALLBACK_URL,
  NODE_ENV,
  REDIS_URL,
  PORT
} = process.env

export const __prod__ = NODE_ENV === "production"
