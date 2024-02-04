---
title: $voicePing
description: $voicePing will return the voice latency.
id: voicePing
extension: true
---

`$voicePing` will return the voice latency.

## Usage

```php
$voicePing[type?]
```

## Parameters

| Field | Type                                                                                              | Description                                                 | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | :------: |
| type? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | type to return <br /> 1. **ws** (default) <br /> 2. **upd** |  false   |

## Example(s)

This will return the current voice latency:

```javascript
client.command({
  name: "voicePing",
  code: `
    $voicePing[ws]
  `,
});
```
