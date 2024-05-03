---
title: $noMentionMessage
description: $noMentionMessage will return the part of the message which contains no mention.
id: noMentionMessage
---

`$noMentionMessage` will return the part of the message which contains no mention.

## Usage

```php
$noMentionMessage[args]
```

## Parameters

| Field | Type                                                                                              | Description       | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| args? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Message position. |  false   |

## Example(s)

```javascript
client.command({
    name: "noMentionMessage",
    code: `
    $noMentionMessage[1]
    `
});
```
