# json-like-parse
JavaScript npm module that finds JSON-like text within a string and then parses it on best effort basis.

## Usage
To use this module in another JavaScript file, you can require it like this:
```js
const findAndParseJsonLikeText = require('json-like-parse');

const text = 'Some text before {"key1": "value1", "key2": {"key3": "value3"}} some text after';

const parsedJsonObjects = findAndParseJsonLikeText(text);

console.log(parsedJsonObjects);
```

## Installation

To install the package, run:

```bash
npm install json-like-parse
```

## Tests

To run tests, execute the following command in the module directory:

```bash
npm test
```

## Limitations

This module uses a regex-based approach to matching JSON-like text, which has some limitations and may not work for all valid JSON strings, especially those with more complex nested structures. The `best-effort-json-parser` module will do its best to parse the JSON-like text, but it may not always produce accurate results for malformed JSON.

It is generally better to use a proper JSON parser when working with JSON data. This module should be used with caution and only for specific use cases where a best-effort approach to parsing JSON-like text is acceptable.

## License

[MIT License](https://choosealicense.com/licenses/mit/)