import Twitter from "twitter-lite"
import { CONSUMER_KEY, CONSUMER_SECRET } from "./config"

export default (accessToken?: string, accessTokenSecret?: string) => {
  return new Twitter({
    consumer_key: CONSUMER_KEY!,
    consumer_secret: CONSUMER_SECRET!,
    access_token_key: accessToken,
    access_token_secret: accessTokenSecret,
  })
}
