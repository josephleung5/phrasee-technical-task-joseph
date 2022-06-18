import { Feed } from '../models/Feed'

export const markNotificationAsRead = (feeds: Feed[]) => {
  const readNotification = feeds.map((feed) => {
    feed.read = true
    return feed
  })
  return readNotification
}
