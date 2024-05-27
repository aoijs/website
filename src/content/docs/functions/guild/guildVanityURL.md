---
title: $guildVanityURL
description: $guildVanityURL will return a guild's vanity URL.
id: guildVanityURL
---

`$guildVanityURL` will return a guild's vanity URL.

## Usage

```aoi
$guildVanityURL[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID. |  false   |

## Example(s)

This will return the vanity URL of your guild, if you have one:

```javascript
client.command({
    name: "guildVanityURL",
    code: `
  $guildVanityURL[$guildID]
  `
});
```
