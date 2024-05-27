---
title: $guildChannels
description: $guildChannels will return all channels of a specific guild.
id: guildChannels
---

`$guildChannels` will return all channels of a specific guild.

## Usage

```aoi
$guildChannels[guildID?;option?;sep?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                                                 | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild.                                                                                        |  false   |
| option?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The option on how to return the channel <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |  false   |
| sep?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to separate multiple returned values.                                                             |  false   |

## Example(s)

This will return all channels of your guild:

```javascript
client.command({
    name: "guildChannels",
    code: `
  $guildChannels[$guildID;mention;, ]
  `
});
```
