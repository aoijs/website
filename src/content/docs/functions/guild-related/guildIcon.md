---
title: $guildIcon
description: $guildIcon will return the guild's icon.
id: guildIcon
---

`$guildIcon` will return the guild's icon.

## Usage

```php
$guildIcon[guildID?;size?;dynamic?;extension?]
```

## Parameters

| Field      | Type    | Description                               | Required |
| ---------- | ------- | ----------------------------------------- | :------: |
| guildID?   | integer | The ID of the guild.                      |  false   |
| size?      | integer | The size of the image.                    |  false   |
| dynamic?   | boolean | 1. **true** (default) <br /> 2. **false** |  false   |
| extension? | string  | Image format.                             |  false   |

## Example(s)

This will return the icon of the guild:

```javascript
client.command({
  name: "guildIcon",
  code: `
  $guildIcon[$guildID;4096;true;webp]
  `
});
```
