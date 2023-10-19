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

| Field                                                                                                                                          | Type                                                                                                | Description                                     | Required |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| guildID                                                                                                                                        | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The guild ID of where the roles are located in. |   true   |
| ...roles                                                                                                                                       | [integer](https://developer.mozilla.org/en-US/docs/Web/                                             |
| JavaScript/Reference/Global_Objects/Integer),[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The Ids of the roles.                                                                               | true                                            |

## Example(s)

This will delete roles of your guilds ( make sure to add actual IDs ):

```javascript
client.command({
  name: "deleteRoles",
  code: `
  Deleted three roles!
  $deleteRoles[$guildID;roleID1;roleID2;roleID3]
  `,
});
```
