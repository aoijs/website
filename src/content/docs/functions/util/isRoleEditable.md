---
title: $isRoleEditable
description: $isRoleEditable will check if the role is editable.
id: isRoleEditable
---

`$isRoleEditable` will check if the role is editable.

## Usage

```php
$isRoleEditable[roleID;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                       | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- | :------: |
| roleID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the role you want to check if its editable. |   true   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild where the role exists.        |  false   |

## Example(s)

This will check if a role called `Owner` is editable:

```javascript
client.command({
    name: "isRoleEditable",
    code: `
  $isRoleEditable[$findRole[Owner];$guildID]
  `
});
```
