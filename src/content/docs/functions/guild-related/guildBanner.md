---
title: $guildBanner
description: $guildBanner will return the guild banner of a given guild.
id: guildBanner
---

`$guildBanner` will return the guild banner of a given guild.

## Usage

```php
$guildBanner[guildID?;size?;dynamic?;extension?]
```

## Parameters

| Field      | Type    | Description                               | Required |
| ---------- | ------- | ----------------------------------------- | :------: |
| guildID?   | integer | The ID of the guild.                      |  false   |
| size?      | integer | The size of the image.                    |  false   |
| dynamic?   | boolean | 1. **true** (default) <br /> 2. **false** |  false   |
| extension? | string  | Image format.                             |  false   |

## Example(s)

This will return your guild banner (if unlocked and using):

```javascript
bot.command({
  name: "guildBanner",
  code: `
  $guildBanner[$guildID]
  `,
});
```
