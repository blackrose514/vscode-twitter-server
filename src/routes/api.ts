import { Router } from "express"
import { APIController } from "../Controllers"

const router = Router()

router.post("/verify", APIController.verify)
router.post("/tweet", APIController.tweet)

export default router
