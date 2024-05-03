---
title: $rolePosition
description: $rolePosition will return the role position of a specific role.
id: rolePosition
---

`$rolePosition` will return the role position of a specific role.

## Usage

```php
$rolePosition[roleID;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------- | :------: |
| roleID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The role ID.  |   true   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID. |  false   |

## Example(s)

This will return the role position of any role you might like, for this example, we'll use the `@everyone` role:

```javascript
client.command({
    name: "rolePosition",
    code: `
  $rolePosition[$guildID]
  `
});
```
