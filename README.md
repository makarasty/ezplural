# ezplural
💭 Eazy Node.js module that, generates grammatically messages based on numeric input. Extensible, supports localization. Fast performance.
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
