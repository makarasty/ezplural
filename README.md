# ezplural
💭 A lightweight Node.js module that dynamically generates grammatically correct messages based on numerical input. It's designed to be easily extensible and supports localization. The module prioritizes fast performance for efficient processing
# Install
`npm i ezplural`
# Example 0
```js
const getEzPlural = require('ezplural')
const pack = ['слово', 'слова', 'слів']

getEzPlural(1, pack) // 'слово'
getEzPlural(34, pack) // 'слова'
getEzPlural(45, pack) // 'слів'
```
# Example 1
```js
const getEzPlural = require('ezplural')
const pack = ['text', 'texts']

getEzPlural(1, pack) // 'text'
getEzPlural(34, pack) // 'texts'
getEzPlural(45, pack) // 'texts'
```
# Example 2
```js
const getEzPlural = require('ezplural')
const pack = ['сообщения', 'сообщения', 'сообщений']

getEzPlural(1, pack) // 'сообщения'
getEzPlural(34, pack) // 'сообщения'
getEzPlural(45, pack) // 'сообщений'
```
# Important
It works too simply, don't expect perfect results, but it's very fast 😋
