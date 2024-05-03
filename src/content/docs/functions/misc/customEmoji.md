---
title: $customEmoji
description: $customEmoji will return a custom emoji.
id: customEmoji
---

`$customEmoji` will return a custom emoji.

## Usage

```php
$customEmoji[emojiResolver;guildID?]
```

## Parameters

| Field         | Type                                                                                                                                                                                                 | Description                                                                                 | Required |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | :------: |
| emojiResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Emoji name or ID.                                                                           |   true   |
| guildID?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Where the emoji is from. <br /> 1. **global** <br /> 2. **guildID** - replace with guild ID |  false   |

## Example(s)

This send a custom emoji of your choice, replace emojiResolver with an actual emoji name or ID:

Tries to search for the emoji in all guilds the bot is in:

```javascript
client.command({
    name: "customEmoji",
    code: `
  $customEmoji[emojiResolver;global]
  `
});
```

Tries to return the emoji of the given guild:

```javascript
client.command({
    name: "customEmoji",
    code: `
  $customEmoji[emojiResolver;specific guild ID]
  `
});
```
