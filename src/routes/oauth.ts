import { Router } from "express"
import { OAuthController } from "../Controllers"

const router = Router()

router.get("/", OAuthController.oauth)
router.get("/callback", OAuthController.callback)
router.get("/error", OAuthController.error)

export default router
