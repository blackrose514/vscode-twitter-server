import RateLimit from "express-rate-limit"
import RedisStore from "rate-limit-redis"
import client from "../redis"

export default RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  store: new RedisStore({
    client
  })
})
