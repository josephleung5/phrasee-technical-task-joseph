import { User } from './User'
import { Comment } from './Comment'

export interface Post {
  id: string
  title: string
}

export interface AggregatedPost {
  id: string,
  title: string,
  comments: Comment[],
  likes: {
    users: User[],
  }
}
