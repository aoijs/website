---
title: $guildEmojiExists
description: $guildEmojiExists will check if the given emoji exists in the given guild.
id: guildEmojiExists
---

`$guildEmojiExists` will check if the given emoji exists in the given guild.

## Usage

```php
$guildEmojiExists[emojiResolver;guildId?]
```

## Parameters

| Field         | Type                                                                                              | Description                             | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- | :------: |
| emojiResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Emoji you want to check if it exists.   |   true   |
| guildID?      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the guild where the emoji exists. |  false   |

## Example(s)

This will return `true` as the emoji exists:

```javascript
client.command({
    name: "guildEmojiExists",
    code: `
  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]
  `
});
```
