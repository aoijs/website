---
title: $guildNames
description: $guildNames will return the name of the guilds your bot is in.
id: guildNames
---

`$guildNames` will return the name of the guilds your bot is in.

## Usage

```aoi
$guildNames[sep?]
```

## Parameters

| Field | Type                                                                                              | Description                                     | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| sep?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to separate multiple returned values. |  false   |

## Example(s)

This will return the names of the guilds your bot is in and separate it by a comma:

```javascript
client.command({
    name: "guildNames",
    code: `
  $guildNames[, ]
  `
});
```
