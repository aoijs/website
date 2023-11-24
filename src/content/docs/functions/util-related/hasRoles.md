---
title: $hasRoles
description: $hasRoles check if the provided user has the roles listed in the roles argument.
id: hasRoles
---

`$hasRoles` check if the provided user has the roles listed in the roles argument.

## Usage

```php
$hasRoles[guildID;userID;...roles]
```

## Parameters

| Field    | Type                                                                                              | Description                                     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| guildID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the guild where the roles are present in. |   true   |
| userID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the user which has the roles.             |   true   |
| ...roles | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The roles that will be checked for.             |   true   |

## Example(s)

This will return `true` when the user has the listed roles:

```javascript
client.command({
  name: "hasRoles",
  code: `
  $hasRoles[$guildID;$authorID;$findRole[Owner]]
  `
});
```
