# json-like-parse
JavaScript npm module that finds JSON-like text within a string and then parses it on best effort basis.

## Why

The primary use case for this module is to parse output generated by Artificial Intelligence (AI) systems and Large Language Models (LLMs), such as OpenAI's GPT series. When interacting with these models, developers often use format specifying prompts to request structured data like JSON. However, due to the nature of AI-generated text, the output might not always be valid JSON. This can lead to parsing issues when using traditional JSON parsers.

This module offers a best-effort approach to finding and parsing JSON-like text within the AI-generated output, helping developers handle potentially malformed JSON.

For example, consider the following AI-generated responses:

1. `AI: {"name": "John", "age": 28, "city": "New York"} and he loves playing soccer.`
2. `{"product": "laptop", "price": 1200, "currency": "USD"`

In both cases, the responses contain JSON-like text but are not strictly valid JSON. The first response has extra text bewfore and after the JSON object, and the second response is missing a closing brace because the response got truncated (due to max_tokens for example). Using a traditional JSON parser would throw an error, but this module attempts to parse the JSON-like text as accurately as possible, making it easier to work with AI-generated content.

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

[![Node.js Package](https://github.com/WiegerWolf/json-like-parse/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/WiegerWolf/json-like-parse/actions/workflows/npm-publish.yml)

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