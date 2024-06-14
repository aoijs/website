---
title: $hasAnyRole
description: $hasAnyRole will check if the provided user has any of the roles listed in the roles argument.
id: hasAnyRole
---

`$hasAnyRole` will check if the provided user has any of the roles listed in the roles argument.

## Usage

```aoi
$hasAnyRole[guildID;userID;...roles]
```

## Parameters

| Field    | Type                                                                                              | Description                                     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| guildID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the guild where the roles are present in. |   true   |
| userID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the user.                                 |   true   |
| ...roles | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The roles that will be checked for.             |   true   |

## Example(s)

This will return `true` when the user has any of the listed roles:

```javascript
client.command({
    name: "hasAnyRole",
    code: `
  $hasAnyRole[$guildID;$authorID;$findRole[Owner];$findRole[Admin]]
  `
});
```
