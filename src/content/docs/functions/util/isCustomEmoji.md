---
title: $isCustomEmoji
description: $isCustomEmoji will check if the given emoji is a custom emoji or not.
id: isCustomEmoji
---

`$isCustomEmoji` will check if the given emoji is a custom emoji or not.

## Usage

```php
$isCustomEmoji[emojiResolver;guildID?]
```

## Parameters

| Field         | Type                                                                                              | Description                                      | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | :------: |
| emojiResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Emoji you want to check if it is a custom emoji. |   true   |
| guildID?      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the guild where the emoji was created in.  |  false   |

## Example(s)

This will return `true` as
the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji is indeed a
custom emoji:

```javascript
client.command({
  name: "isCustomEmoji",
  code: `
  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]
  `
});
```
