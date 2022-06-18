import { markNotificationAsRead } from "./markNotificationAsRead"
import { Feed } from '../models/Feed'

describe('markNotificationAsRead', () => {
  test('all feed is marked as read (read: true)', () => {
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
    ]

    const readFeed: Feed[] = [
      {
        "type":"Like",
        "read":true,
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
        "read":true,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "user":{
          "id":"2",
          "name":"user 2"
        }
      },
    ]

    const readNotification = markNotificationAsRead(mockFeed)

    expect(readNotification).toEqual(readFeed)
  })
})
