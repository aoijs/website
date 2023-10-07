---
title: $guildRoles
description: $guildRoles will return all roles of a specific guild.
id: guildRoles
---

`$guildRoles` will return all roles of a specific guild.

## Usage

```php
$guildRoles[guildID?;option?;sep?]
```

## Parameters

| Field    | Type    | Description                                                                                               | Required |
| -------- | ------- | --------------------------------------------------------------------------------------------------------- | :------: |
| guildID? | integer | The ID of the guild.                                                                                      |  false   |
| option?  | string  | The option on how to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |  false   |
| sep?     | string  | Separator to separate multiple returned values.                                                           |  false   |

## Example(s)

This will return all roles of your guild:

```javascript
client.command({
  name: "guildRoles",
  code: `
  $description[$guildRoles[$guildID;name;, ]]
  `
});
```
