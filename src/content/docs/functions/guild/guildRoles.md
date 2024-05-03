---
title: $guildRoles
description: $guildRoles will return all roles of a specific guild.
id: guildRoles
---

`$guildRoles` will return all roles of a specific guild.

## Usage

```php
$guildRoles[guildID?;type?;sep?;removeManagedRoles?;fetch?]
```

## Parameters

| Field               | Type                                                                                                | Description                                                                                               | Required |
| ------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | :------: |
| guildID?            | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The ID of the guild.                                                                                      |  false   |
| type?               | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The option on how to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** |  false   |
| sep?                | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Separator to separate multiple returned values.                                                           |  false   |
| removeManagedRoles? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Remove Managed Roles from the result.                                                                     |  false   |
| fetch?              | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Fetch all roles of the guild.                                                                             |  false   |

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
