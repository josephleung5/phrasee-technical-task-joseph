import express, { Application, Request, Response } from 'express'
import { notificationFeedData } from './data/notificationFeed'
import { getPostById } from './helper/getPostHelper'
import { isFeedType } from './helper/postPostHelper'
import { markNotificationAsRead } from './helper/markNotificationAsRead'
import { Feed } from './models/Feed'

const app: Application = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

let notificationFeed: Feed[] = notificationFeedData

app.get('/post/:postId', (req: Request, res: Response) => {
  const response = getPostById(notificationFeed, req.params.postId)
  res.status(200).send(response)
})

app.post('/post', (req: Request, res: Response) => {
  const feed: Feed = req.body

  // didn't hand duplicate likes
  if (isFeedType(feed)) {
    notificationFeed = [...notificationFeed, feed]
    res.status(200).send('ok')
  } else {
    res.status(400).send('Bad request')
  }
})

app.put('/markNotificationAsRead', (req: Request, res: Response) => {
  markNotificationAsRead(notificationFeed)
  res.status(200).send(notificationFeed)
})

app.listen(port, () => console.log(`server is running at localhost:${port}`)) 
