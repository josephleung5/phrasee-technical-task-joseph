import { isFeedType } from './postPostHelper'

describe('postPostHelper', () => {
  describe('isFeedType', () => {
    test('type is not \'Comment\' nor \'Like\', return false', () => {
      const feed = {
        "type":"not suit type",
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
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('type of read is not boolean, return false', () => {
      const feed = {
        "type":"Comment",
        "read":'not boolean',
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
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('post is missing, return false', () => {
      const feed = {
        "type":"Comment",
        "read":false,
        "comment":{
          "id":"1",
          "commentText":"comment 1"
        },
        "user":{
          "id":"1",
          "name":"user 1"
        },
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('user is missing, return false', () => {
      const feed = {
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
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('type is \'Comment\' but comment is missing, return false', () => {
      const feed = {
        "type":"Comment",
        "read":'not boolean',
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "user":{
          "id":"1",
          "name":"user 1"
        }
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('post is missing id, return false', () => {
      const feed = {
        "type":"Like",
        "read":false,
        "post":{
          "title":"post 1"
        },
        "user":{
          "id":"1",
          "name":"user 1"
        }
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('post is missing title, return false', () => {
      const feed = {
        "type":"Like",
        "read":false,
        "post":{
          "id":"1",
        },
        "user":{
          "id":"1",
          "name":"user 1"
        }
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('user is missing id, return false', () => {
      const feed = {
        "type":"Like",
        "read":false,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "user":{
          "name":"user 1"
        }
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('user is missing name, return false', () => {
      const feed = {
        "type":"Like",
        "read":false,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "user":{
          "id":"1",
        }
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('comment is missing id, return false', () => {
      const feed = {
        "type":"Comment",
        "read":false,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "comment": {
          "commentText":"This is a comment"
        },
        "user":{
          "id":"1",
        }
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('comment is missing commentText, return false', () => {
      const feed = {
        "type":"Comment",
        "read":false,
        "post":{
          "id":"1",
          "title":"post 1"
        },
        "comment": {
          "id":"1"
        },
        "user":{
          "id":"1",
        }
      }

      const check = isFeedType(feed)

      expect(check).toEqual(false)
    })

    test('Like feed with the correct interface, return true', () => {
      const feed = {
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
      }

      const check = isFeedType(feed)

      expect(check).toEqual(true)
    })

    test('Comment feed with the correct interface, return true', () => {
      const feed = {
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
      }

      const check = isFeedType(feed)

      expect(check).toEqual(true)
    })
  })
})