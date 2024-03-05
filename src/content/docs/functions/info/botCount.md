---
title: $guildBotCount
description: $guildBotCount will return the amount of Bots in your guild.
id: guildBotCount
---

`$guildBotCount` will return the amount of Bots in your guild.

## Usage

```php
$guildBotCount[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                    | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID of the guild you want to retrieve the amount of bots. |  false   |

## Example(s)

This will return the amount of bots in your guild:

```javascript
client.command({
  name: "guildBotCount",
  code: `
  $guildBotCount
  `
});
```
