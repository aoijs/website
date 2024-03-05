---
title: $isGuildPartnered
description: $isGuildPartnered checks if the given guild is partnered with Discord.
id: isGuildPartnered
---

`$isGuildPartnered` checks if the given guild is partnered with Discord.

## Usage

```php
$isGuildPartnered[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                      | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild you want to check its partnership status of. |   true   |

## Example(s)

This will check if your server is partnered and return either `true` or `false`:

```javascript
client.command({
  name: "isGuildPartnered",
  code: `
  $isGuildPartnered[$guildID]
  `
});
```
