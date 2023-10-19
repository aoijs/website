---
title: $setRolePosition
description: $setRolePosition will set a roles' position.
id: setRolePosition
---

`$setRolePosition` will set a roles' position.

## Usage

```php
$setRolePosition[roleID;position;guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description                                             | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | :------: |
| roleID   | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the role to modify.                           |   true   |
| position | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The new position of the role. (1 being the very bottom) |   true   |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the guild of where the role is located in.    |  false   |

## Example(s)

This will change a random role's position to `1` (the bot's highest role must be above that role):

```javascript
client.command({
  name: "setRolePosition",
  code: `
   $setRolePosition[$randomRoleID;1;$guildID]`,
});
```
