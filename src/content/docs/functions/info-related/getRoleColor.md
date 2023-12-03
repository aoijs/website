---
title: $getRoleColor
description: $getRoleColor will return the given role's color.
id: getRoleColor
---

`$getRoleColor` will return the given role's color.

## Usage

```php
$getRoleColor[roleId;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                              | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | :------: |
| roleId   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the role you want the color to be returned of. |   true   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild where the role exists in.            |  false   |

## Example(s)

This will return the role ID of your highest role:

```javascript
client.command({
  name: "getRoleColor",
  code: `
  $getRoleColor[$userHighestRole]
  `
});
```
