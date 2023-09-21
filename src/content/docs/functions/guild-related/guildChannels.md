---
title: $guildChannels
description: $guildChannels will return all channels of a specific guild.
id: guildChannels
---

`$guildChannels` will return all channels of a specific guild.

## Usage

```php
$guildChannels[guildID?;option?;sep?]
```

## Parameters

| Field    | Type    | Description                                                                                                 | Required |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------- | :------: |
| guildID? | integer | The ID of the guild.                                                                                        |  false   |
| option?  | string  | The option on how to return the channel <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |  false   |
| sep?     | string  | Separator to separate multiple returned values.                                                             |  false   |

## Example(s)

This will return all channels of your guild:

```javascript
client.command({
  name: "guildChannels",
  code: `
  $guildChannels[$guildID;mention;, ]
  `,
});
```
