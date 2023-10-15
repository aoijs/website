---
title: $resolveEmojiID
description: $resolveEmojiID will resolve a certain emoji.
id: resolveEmojiID
---

`$resolveEmojiID` will resolve a certain emoji.

## Usage

```php
$resolveEmojiID[emojiResolver]
```

## Parameters

| Field         | Type                                                                                              | Description           | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------- | :------: |
| emojiResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Emoji name or string. |   true   |

## Example(s)

This will return `<:LerefMoney:1003365344724910191>`:

```javascript
client.command({
  name: "resolveEmojiID",
  code: `
  $resolveEmojiID[LerefMoney]
  `,
});
```
