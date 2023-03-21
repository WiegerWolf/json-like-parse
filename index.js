const { parse } = require('best-effort-json-parser');

function findAndParseJsonLikeText(text) {
  const pattern = /{[^{}]*}|{(?:[^{}]*|{[^{}]*})*}/g;
  const jsonLikeTexts = Array.from(text.matchAll(pattern), m => m[0]);

  return jsonLikeTexts.map(jsonText => parse(jsonText));
}

module.exports = findAndParseJsonLikeText;
