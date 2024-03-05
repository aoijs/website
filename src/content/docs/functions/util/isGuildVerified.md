---
title: $isGuildVerified
description: $isGuildVerified checks if the given guild is verified by Discord.
id: isGuildVerified
---

`$isGuildVerified` checks if the given guild is verified by Discord.

## Usage

```php
$isGuildVerified[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                             | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild where you want to check its verification status of. |  false   |

## Example(s)

This will check if your server is verified and return either `true` or `false`:

```javascript
client.command({
  name: "isGuildVerified",
  code: `
  $isGuildVerified[$guildID]
  `
});
```
