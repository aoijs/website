---
title: $maximumMembers
description: $maximumMembers will return the maximal amount of members a guild can have.
id: maximumMembers
---

`$maximumMembers` will return the maximal amount of members a guild can have.

## Usage

```php
$maximumMembers[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the maximum of members you can have in your guild:

```javascript
client.command({
  name: "maximumMembers",
  code: `
  You can have: $maximumMembers[$guildID] Members in this guild!
  `
});
```
