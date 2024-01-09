---
title: $guildAvailable
description: $guildAvailable will return if the given guild is available on Discord.
id: guildAvailable
---

`$guildAvailable` will return if the given guild is available on Discord.

## Usage

```php
$guildAvailable[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return `true` or `false` depending on if the guild is available:

```javascript
client.command({
  name: "guildAvailable",
  code: `
  $guildAvailable[$guildID]
  `
});
```
