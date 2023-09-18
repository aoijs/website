---
title: $voicePing
description: $voicePing will return the voice latency.
id: voicePing
---

`$voicePing` will return the voice latency.

## Usage

```php
$voicePing[type?]
```

## Parameters

| Field | Type   | Description                                                 | Required |
| ----- | ------ | ----------------------------------------------------------- | :------: |
| type? | string | type to return <br /> 1. **ws** (default) <br /> 2. **upd** |  false   |

## Example(s)

This will return the current voice latency:

```javascript
bot.command({
  name: "voicePing",
  code: `
    $voicePing[ws]
  `,
});
```
