---
title: $appendFile
description: $appendFile will add given text to a specific file.
id: appendFile
---

`$appendFile` will add given text to a specific file.

## Usage

```php
$appendFile[path;content;encode?]
```

## Parameters

| Field   | Type                                                                                                                                                                                                 | Description                              | Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | :------: |
| path    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | File location.                           |   true   |
| content | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Content to append to the file            |   true   |
| encode? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Encode type <br /> 1. **utf8** (default) |  false   |

## Example(s)

This will add a comment to your main file:

```javascript
client.command({
  name: "appendFile",
  code: `
  $appendFile[./index.js;// Hello!]
  `,
});
```
