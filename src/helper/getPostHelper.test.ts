import { getPostById } from "./getPostHelper"
import { Feed } from '../models/Feed'
import { AggregatedPost } from '../models/Post'

describe('getPostHelper', () => {
  test('getPostById', () => {
    const mockFeed: Feed[] = [
      {
        "type":"Like",
        "read":false,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "user":{
          "id":"1",
          "name":"user 1"
        }
      },
      {
        "type":"Like",
        "read":false,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "user":{
          "id":"2",
          "name":"user 2"
        }
      },
      {
        "type":"Comment",
        "read":false,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "comment":{
          "id":"1",
          "commentText":"comment 1"
        },
        "user":{
          "id":"1",
          "name":"user 1"
        }
      },
      {
        "type":"Comment",
        "read":false,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "comment":{
          "id":"2",
          "commentText":"comment 2"
        },
        "user":{
          "id":"2",
          "name":"user 2"
        }
      },
      {
        "type":"Like",
        "read":false,
        "post":{
          "id":"2",
          "title":"post 2"
        },
        "user":{
          "id":"2",
          "name":"user 2"
        }
      },
      {
        "type":"Comment",
        "read":false,
        "post":{
          "id":"2",
          "title":"post 2"
        },
        "comment":{
          "id":"1",
          "commentText":"comment 1"
        },
        "user":{
          "id":"1",
          "name":"user 1"
        }
      },
    ]
    const postId = '1'
    const mockAggregatedReuslt: AggregatedPost = {
      id: '1',
      title: 'post 1',
      comments: [
        {
          id: '1',
          commentText: 'comment 1',
        },
        {
          id: '2',
          commentText: 'comment 2',
        }
      ],
      likes: {
        users: [
          {
            id: '1',
            name: 'user 1'
          },
          {
            id: '2',
            name: 'user 2'
          },
        ]
      }
    }

    const result = getPostById(mockFeed, postId) as AggregatedPost

    expect(result).toEqual(mockAggregatedReuslt)
  })
})