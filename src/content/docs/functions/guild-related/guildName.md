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

| Field    | Type    | Description          | Required |
| -------- | ------- | -------------------- | :------: |
| guildID? | integer | The ID of the guild. |  false   |

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
