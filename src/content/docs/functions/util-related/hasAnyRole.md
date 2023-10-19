---
title: $hasAnyRole
description: $hasAnyRole will check if the provided user has any of the roles listed in the roles argument.
id: hasAnyRole
---

`$hasAnyRole` will check if the provided user has any of the roles listed in the roles argument.

## Usage

```php
$hasAnyRole[guildID;userID;...roles]
```

## Parameters

| Field    | Type                                                                                                | Description                                     | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| guildID  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the guild where the roles are present in. |   true   |
| userID   | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the user.                                 |   true   |
| ...roles | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The roles that will be checked for.             |   true   |

## Example(s)

This will return `true` when the user has any of the listed roles:

```javascript
client.command({
  name: "hasAnyRole",
  code: `
  $hasAnyRole[$guildID;$authorID;$findRole[Owner];$findRole[Admin]]
  `,
});
```
