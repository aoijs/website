---
title: $guildMaximumMembers
description: $guildMaximumMembers will return the maximal amount of members a guild can have.
id: guildMaximumMembers
---

`$guildMaximumMembers` will return the maximal amount of members a guild can have.

## Usage

```php
$guildMaximumMembers[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the maximum of members you can have in your guild:

```javascript
client.command({
    name: "guildMaximumMembers",
    code: `
  You can have: $guildMaximumMembers[$guildID] Members in this guild!
  `
});
```
