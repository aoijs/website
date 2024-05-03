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

| Field      | Type                                                                                                | Description                               | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| guildID?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the guild.                      |  false   |
| size?      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The size of the image.                    |  false   |
| dynamic?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 1. **true** (default) <br /> 2. **false** |  false   |
| extension? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Image format.                             |  false   |

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
