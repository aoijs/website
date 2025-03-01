---
title: $uri
description: $uri will encode or decode a URL.
id: uri
---

`$uri` will encode or decode a URL.

## Usage

```aoi
$uri[text;type?]
```

## Parameters

| Field | Type                                                                                              | Description                                                                         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | :------: |
| text  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Text to encode/decode.                                                              |   true   |
| type? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | What to do with the given text. <br /> 1. **encode** (default) <br /> 2. **decode** |  false   |

## Example(s)

This will encode a given text:

```javascript
client.command({
    name: "encode",
    code: `
  $uri[aoi.js is great :);encode]
  `
});
```

This will decode a given text:

```javascript
client.command({
    name: "decode",
    code: `
  $uri[aoi.js%20is%20great%20%3A);decode]
  `
});
```
