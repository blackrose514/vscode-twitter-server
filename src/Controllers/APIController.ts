import { Request as Req, Response as Res } from "express"
import twitter from "../twitter"

export default class APIController {
  static async verify(req: Req, res: Res) {
    const url = "account/verify_credentials"
    const { accessToken, accessTokenSecret } = req.body

    const { screen_name } = await twitter(accessToken, accessTokenSecret).get(
      url
    )

    res.send({ screenName: screen_name })
  }

  static async tweet(req: Req, res: Res) {
    const url = "statuses/update"
    const { status, accessToken, accessTokenSecret } = req.body

    await twitter(accessToken, accessTokenSecret).post(url, {
      status
    })

    res.sendStatus(201)
  }
}
