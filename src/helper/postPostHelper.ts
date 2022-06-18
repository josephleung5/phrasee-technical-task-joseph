import { Feed } from '../models/Feed'

export const isFeedType = (feed: Feed) => {
  if (
    (feed.type !== 'Comment' && feed.type !== 'Like') || 
    (feed.type === 'Like' && feed.comment) ||
    (feed.type === 'Comment' && (!feed.comment || !feed.comment.id || !feed.comment.commentText)) ||
    typeof(feed.read) !== 'boolean' ||
    (!feed.user || !feed.user.id || !feed.user.name) ||
    !feed.post || !feed.post.id || !feed.post.title) {
      return false
    }
  
  return true
}
