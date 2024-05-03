---
title: $test
description: $test will test for a match of the pattern in the text.
id: test
---

`$test` will test for a match of the pattern in the text.

## Usage

```php
$test[text;pattern;flag?]
```

## Parameters

| Field   | Type                                                                                              | Description                                       | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- | :------: |
| text    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The text to be tested.                            |   true   |
| pattern | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The regex pattern that will be used for the test. |   true   |
| flag?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [Flags](#flags).                                  |  false   |

### Flags

|    Flag     | Name          | Description                                                                     |
| :---------: | ------------- | ------------------------------------------------------------------------------- |
|      i      | Ignore Casing | Enable case-insensitive expression search.                                      |
| g (default) | Global        | Search for all occurrences of the expression.                                   |
|      m      | Multiline     | Allow the wildcard character `.` to match newlines.                             |
|      s      | Dot All       | Set boundary characters (`^` and `$`) to match the start and end of every line. |
|      u      | Unicode       | Interpret characters as code points, matching 32-bit characters.                |
|      y      | Sticky        | Begin searching from the `lastIndex` property index.                            |

## Example(s)

This will return `true` since there is "Hello" in the text:

```js
client.command({
    name: "test",
    code: `$test[Hello world!;Hello;g]`
});
```

This will return `true` since the word "hello" is in the text regardless of its casing since the flag `i` is present:

```js
client.command({
    name: "test",
    code: `$test[Hello world!;hello;gi]`
});
```
