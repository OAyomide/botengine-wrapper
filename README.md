# Why this package?
After having to work with a bot built on [chatbot.com](https://chatbot.com), there seems to be a need for helper functions to make webhook responses without creating too much boilerplate json objects. Thus, this package.

Also, working with bots built on chatbot.com means that one has to quite occassionally get informations like story ID, interaction ID and even all entities and their corresponding IDs. This package contains very simple helper functions that allows us to do this. For example in the case where one need to trigger an action based on the entity ID, one can simply use the util functions and assign them to a variable, then use as deemed please.
#

### How to use
Its very simple to use. Simple import the required functions and use in your code.
```javascript
import { SendText } from 'botengine-wrapper'
// OR FOR REQUIREJS
// const { SendText } = require('botengine-wrapper')
(async () => {
  const result = await SendText("<PARAMETERS-HERE>");
  return response.json(result)
})()
```

To use the util class:
```javascript
import { Util } from 'botengine-wrapper'
const util = new Util('<DEVELOPER ACCESS TOKEN HERE>')
(async () => {
  const findAllEntities = await util.getAllEntities() // returns all entities and their IDs
  console.log(findAllEntities) // logs all entities and their IDs
})()
```


### Contribution
Contributions are welcome. Bug fixes, better "how-to" and tests all welcome.

#

### License
Copyright 2019 Fantasylabs

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.