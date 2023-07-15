---
title: '$guildIcon'
description: '$guildIcon will return the guild''s icon.'
id: guildIcon
---

`$guildIcon` will return the guild's icon.

## Usage

```php
$guildIcon[guildID?]
```

## Parameters

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- |:--------:|
| guildID? | integer | The ID of the guild. |  false   |

## Example(s)

This will return the icon of the guild:

```javascript
bot.command({
    name: 'guildIcon',
    code: `
  $guildIcon[$guildID]
  `
});
```
