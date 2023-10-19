---
title: $cacheMembers
description: $cacheMembers will cache all members of a guild.
id: cacheMembers
---

`$cacheMembers` will cache all members of a guild.

## Usage

```php
$cacheMembers[guildID?;returnCount?]
```

## Parameters

| Field                                        | Type                                                                                                | Description                                      | Required |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------ | :------: |
| guildID?                                     | integer                                                                                             | Of which guild the members shall be cached from. |  false   |
| returnCount?                                 | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
 Returns the cached member count. <br /> 1. **true** <br /> 2. **false** (default)                   | false                                            |

## Example(s)

This will cache all members of the current guild and return the amount of the cached members:

```javascript
client.command({
  name: "cacheMembers",
  code: `
  $cacheMembers[$guildID;true]
  `,
});
```
