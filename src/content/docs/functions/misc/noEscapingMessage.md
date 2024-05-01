---
title: $noEscapingMessage
description: $noEscapingMessage will return the non escaped message.
id: noEscapingMessage
---

`$noEscapingMessage` will return the non escaped message.

## Usage

```php
$noEscapingMessage[args]
```

## Parameters

| Field | Type                                                                                              | Description       | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| args? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Message position. |  false   |

## Example(s)

```javascript
client.command({
    name: "noEscapingMessage",
    code: `
    $noEscapingMessage[1]
    `
});
```
