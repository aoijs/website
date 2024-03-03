---
title: $deleteRoles
description: $deleteRoles will delete one or multiple roles.
id: deleteRoles
---

`$deleteRoles` will delete one or multiple roles.

## Usage

```php
$deleteRoles[guildID;...roles]
```

## Parameters

| Field                                                                                                                                         | Type                                                                                              | Description                                     | Required |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| guildID                                                                                                                                       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of where the roles are located in. |   true   |
| ...roles                                                                                                                                      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The IDs of the roles.                                                                             | true                                            |

## Example(s)

This will delete roles of your guilds ( make sure to add actual IDs ):

```javascript
client.command({
  name: "deleteRoles",
  code: `
  Deleted three roles!
  $deleteRoles[$guildID;roleID1;roleID2;roleID3]
  `
});
```
