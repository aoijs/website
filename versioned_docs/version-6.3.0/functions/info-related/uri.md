---
title: $uri
description: $uri will encode or decode an URL.
id: uri
---

`$uri` will encode or decode an URL.

## Usage

```php
$uri[text;type?]
```

## Parameters

| Field | Type   | Description                                                                         | Required |
| ----- | ------ | ----------------------------------------------------------------------------------- | :------: |
| text  | string | Text to encode/decode.                                                              |   true   |
| type? | string | What to do with the given text. <br /> 1. **encode** (default) <br /> 2. **decode** |  false   |

## Example(s)

This will encode a given text:

```javascript
bot.command({
    name: 'encode',
    code: `
  $uri[aoi.js is great :);encode]
  `
});
```

This will decode a given text:

```javascript
bot.command({
    name: 'decode',
    code: `
  $uri[aoi.js%20is%20great%20%3A);decode]
  `
});
```
