---
title: $guildEmojis
description: $guildEmojis will return the emojis of a specific guild.
id: guildEmojis
---

`$guildEmojis` will return the emojis of a specific guild.

## Usage

```php
$guildEmojis[sep?;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                    | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------- | :------: |
| sep?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator to separate the returned emojis. |  false   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild.                           |  false   |

## Example(s)

This will return the emojis of your guild:

```javascript
client.command({
  name: "guildEmojis",
  code: `
  $guildEmojis[, ;$guildID]
  `
});
```
