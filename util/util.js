const axios = require('axios')

class Util {
  constructor(developerToken) {
    this.devToken = developerToken
  }

  async trainByText(text, entityName, entityId) {
    try {
      const train = await axios({
        method: 'put',
        url: `https://api.chatbot.com/entities/${entityId}`,
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${this.devToken}`
        },
        data: {
          name: entityName,
          entries: [
            {
              synonyms: [
                {
                  value: entityName
                }, ...text
              ]
            }
          ],
          value: entityName
        }
      })

      return train.data
    } catch (e) {
      return e
    }
  }

  async getAllEntities() {
    try {
      const request = await axios({
        method: 'get',
        url: `https://api.chabot.com/entities`,
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${this.devToken}`
        }
      })

      return request.data
    } catch (e) {
      return e
    }
  }

  async getAllInteractionAndTheirId(storyId) {
    try {
      const p = []
      const request = await axios({
        method: 'get',
        url: `https://api.chatbot.com/stories/${storyId}`,
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${this.devToken}`
        }
      })

      const { interactions } = request.data
      const kv = Object.keys(interactions).forEach(x => {
        const { id, name } = interactions[x]
        let kvs = {
          name: name,
          id: id
        }

        p.push(kvs)
      })
      return p
    } catch (e) {
      return e
    }
  }
}

module.exports = { Util }