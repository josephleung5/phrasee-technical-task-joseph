import { Post } from './Post'
import { User } from './User'

export interface Feed {
  type: 'Like' | 'Comment'
  read: boolean
  post: Post
  user: User
  [x: string]: any
}
