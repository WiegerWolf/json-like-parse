# json-like-parse
JavaScript npm module that finds JSON-like text within a string and then parses it on best effort basis

## Usage
To use this module in another JavaScript file, you can require it like this:
```js
const findAndParseJsonLikeText = require('./path/to/your/module');

const text = 'Some text before {"key1": "value1", "key2": {"key3": "value3"}} some text after';

const parsedJsonObjects = findAndParseJsonLikeText(text);

console.log(parsedJsonObjects);
```