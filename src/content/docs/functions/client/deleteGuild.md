---
title: $deleteGuild
description: $deleteGuild will delete a given guild.
id: deleteGuild
---

`$deleteGuild` will delete a given guild.

## Usage

```php
$deleteGuild[guildId]
```

:::danger[Limitation]

The bot cannot delete servers if it's not the owner of them!

:::

## Parameters

| Field   | Type                                                                                              | Description          | Required |
| ------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The id of the guild. |   true   |

## Example(s)

This will attempt to delete the current guild:

```javascript
client.command({
    name: "deleteGuild",
    code: `
  $deleteGuild[$guildId]
  `
});
```
