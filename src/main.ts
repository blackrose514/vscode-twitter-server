import express from "express"
import "express-async-errors"
import routes from "./routes"
import { PORT } from "./config"
import { rateLimiter, helmet, errorHandler } from "./middleware"

const app = express()

app.set("trust proxy", 1)

app.use(express.json())
app.use(helmet())
app.use(rateLimiter)
app.use(routes)
app.use(errorHandler())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
