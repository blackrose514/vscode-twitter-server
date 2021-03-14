import { Router } from "express"
import api from "./api"
import oauth from "./oauth"

const router = Router()

router.use("/api", api)
router.use("/oauth", oauth)

export default router
