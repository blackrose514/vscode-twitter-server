import { ErrorRequestHandler } from "express"

export default (): ErrorRequestHandler => (err, _, res, __) => {
  console.error(err)
  if ("errors" in err) {
    // Twitter API error
    if (err?.errors[0]?.code === 88) {
      // rate limit exceeded
      res.sendStatus(429)
    } else {
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(500)
  }
}
