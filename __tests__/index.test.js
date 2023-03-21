const findAndParseJsonLikeText = require('../index');

test('finds and parses JSON-like text', () => {
    const text = 'Some text before {"key1": "value1", "key2": {"key3": "value3"}} some text after';
    const result = findAndParseJsonLikeText(text);
    expect(result).toEqual([{ key1: 'value1', key2: { key3: 'value3' } }]);
});

test('handles multiple JSON-like blocks', () => {
    const text = 'Block 1: {"a": 1, "b": 2} Block 2: {"c": 3, "d": 4}';
    const result = findAndParseJsonLikeText(text);
    expect(result).toEqual([{ a: 1, b: 2 }, { c: 3, d: 4 }]);
});

test('returns an empty array when no JSON-like text is found', () => {
    const text = 'This text contains no JSON-like blocks.';
    const result = findAndParseJsonLikeText(text);
    expect(result).toEqual([]);
});

test('handles malformed JSON-like text using best-effort-json-parser', () => {
    const text = 'Malformed JSON: {"a": "apple", "b": "banana",}';
    const result = findAndParseJsonLikeText(text);
    expect(result).toEqual([{ a: 'apple', b: 'banana' }]);
});  
