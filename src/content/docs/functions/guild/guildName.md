---
title: $guildName
description: $guildName will return a guild's name.
id: guildName
---

`$guildName` will return a guild's name.

## Usage

```php
$guildName[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the name of your guild:

```javascript
client.command({
    name: "guildName",
    code: `
  $guildName[$guildID]
  `
});
```
