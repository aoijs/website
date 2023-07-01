---
title: $guildBanner
description: $guildBanner will return the guild banner of a given guild.
id: guildBanner
---

`$guildBanner` will return the guild banner of a given guild.

## Usage

```php
$guildBanner[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return your guild banner (if unlocked and using):

```javascript
bot.command({
    name: 'guildBanner',
    code: `
  $guildBanner[$guildID]
  `
});
```
