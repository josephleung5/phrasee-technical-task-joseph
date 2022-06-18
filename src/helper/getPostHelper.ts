import { Feed } from '../models/Feed'
import { AggregatedPost } from '../models/Post'
import { User } from '../models/User'
import { Comment } from '../models/Comment'

export const getLikeFeedArray = (feeds: Feed[]) => {
  const likeFeeds = feeds.filter((feed) => feed.type === 'Like')
  const users: User[] = []
  likeFeeds.forEach((likeFeed) => users.push(likeFeed.user))
  return users
}

export const getCommentFeedArray = (feeds: Feed[]) => {
  const commentFeeds = feeds.filter((feed) => feed.type === 'Comment')
  const comments: Comment[] = []
  commentFeeds.forEach((commentFeed) => comments.push(commentFeed.comment))
  return comments
}

export const getPostById = (notificationFeeds: Feed[], postId: string): AggregatedPost | Record<string, never> => {
  const feeds = notificationFeeds.filter((feed) => feed.post.id === postId)

  if (feeds.length === 0) return {}

  const aggregatedPost: AggregatedPost = {
    id: '',
    title: '',
    comments: [],
    likes: {
      users: [],
    },
  }

  aggregatedPost.id = postId
  aggregatedPost.title = feeds[0].post.title

  aggregatedPost.likes.users = getLikeFeedArray(feeds)
  aggregatedPost.comments = getCommentFeedArray(feeds)

  return aggregatedPost
}
