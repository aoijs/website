---
title: $guildVanityURL
description: $guildVanityURL will return a guild's vanity URL.
id: guildVanityURL
---

`$guildVanityURL` will return a guild's vanity URL.

## Usage

```aoi
$guildVanityURL[guildID?;fetchFirst?]
```

## Parameters

| Field      | Type                                                                                                | Description                                       | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------- | :------: |
| guildID?   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The guild ID.                                     |  false   |
| fetchFirst?| [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Whether to fetch fresh vanity URL data from API.  |  false   |

## Example(s)

This will return the vanity URL of your guild, fetching fresh data:

```javascript
client.command({
    name: "guildVanityURL",
    code: `
  $guildVanityURL[$guildID;true]
  `
});
```
