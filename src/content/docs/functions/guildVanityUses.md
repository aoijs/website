---
title: $guildVanityUses
description: $guildVanityUses will return the uses of a vanity URL.
id: guildVanityUses
---

`$guildVanityUses` will return the uses of a vanity URL.

## Usage

```aoi
$guildVanityUses[guildID?;fetchFirst?]
```

## Parameters

| Field      | Type                                                                                                | Description                                       | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- | :------: |
| guildID?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The guild ID.                                     |  false   |
| fetchFirst?| [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to fetch fresh vanity URL data from API.  |  false   |

## Example(s)

This will return the uses of your guild's vanity URL, fetching fresh data:

```javascript
client.command({
    name: "guildVanityUses",
    code: `
  $guildVanityUses[$guildID;true]
  `
});
```
