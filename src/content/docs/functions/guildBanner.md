---
title: $guildBanner
description: $guildBanner will return the guild banner of a given guild.
id: guildBanner
---

`$guildBanner` will return the guild banner of a given guild.

## Usage

```aoi
$guildBanner[guildID?;size?;dynamic?;extension?]
```

## Parameters

| Field      | Type                                                                                                | Description                               | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| guildID?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the guild.                      |  false   |
| size?      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The size of the image.                    |  false   |
| dynamic?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 1. **true** (default) <br /> 2. **false** |  false   |
| extension? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Image format.                             |  false   |

## Example(s)

This will return your guild banner (if unlocked and using):

```javascript
client.command({
    name: "guildBanner",
    code: `
  $guildBanner[$guildID]
  `
});
```
