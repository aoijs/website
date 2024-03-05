---
title: $guildHighestRole
description: $guildHighestRole will return the highest guild role of a specific guild.
id: guildHighestRole
---

`$guildHighestRole` will return the highest guild role of a specific guild.

## Usage

```php
$guildHighestRole[guildID?;option?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                                              | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild.                                                                                     |  false   |
| option?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The option on how to return the role <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |  false   |

## Example(s)

This will return the name of the highest role of your guild:

```javascript
client.command({
  name: "guildHighestRole",
  code: `
  $guildHighestRole[$guildID;name]
  `
});
```
