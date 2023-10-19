---
title: $guildRoleIconURL
description: $guildRoleIconURL will retrieve the image URL of the role icon.
id: guildRoleIconURL
---

`$guildRoleIconURL` will retrieve the image URL of the role icon.

## Usage

```php
$guildRoleIconURL[guildId?;roleId]
```

## Parameters

| Field    | Type                                                                                                | Description                                    | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- | :------: |
| guildId? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the guild where the role exists.         |  false   |
| roleId   | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the role you want to check if it exists. |   true   |

## Example(s)

This will return the image URL of the role icon:

```javascript
client.command({
  name: "guildRoleIconURL",
  code: `
  $guildRoleIconURL[$guildID;900004369355931729]
  `,
});
```
