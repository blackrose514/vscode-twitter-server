import { Request as Req, Response as Res } from "express"
import { CALLBACK_URL } from "../config"
import twitter from "../twitter"

export default class TwitterContoller {
  static async oauth(_: Req, res: Res) {
    const result = await twitter().getRequestToken(CALLBACK_URL!)

    if (result.oauth_callback_confirmed === "false") {
      return res.redirect("/oauth/error?type=could_not_fetch_request_token")
    }

    res.redirect(
      `https://api.twitter.com/oauth/authenticate?oauth_token=${result.oauth_token}`
    )
  }

  static async callback(req: Req, res: Res) {
    const { oauth_token, oauth_verifier } = req.query as any

    if (!oauth_token || !oauth_verifier) {
      return res.redirect("/oauth/error?type=invalid_oauth")
    }

    const {
      oauth_token: access_token,
      oauth_token_secret: access_token_secret
    } = await twitter().getAccessToken({
      oauth_token,
      oauth_verifier
    })

    res.redirect(
      `http://localhost:51400/authorize/${access_token}/${access_token_secret}`
    )
  }

  static error(_: Req, res: Res) {
    res.sendStatus(400)
  }
}
