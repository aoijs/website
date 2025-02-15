---
title: $guildRandomID
description: $guildRandomID will return a random guild ID.
id: guildRandomID
---

`$guildRandomID` will return a random guild ID.

## Usage

```aoi
$guildRandomID
```

## Example(s)

This will return a random guild ID of the guilds your bot is in:

```javascript
client.command({
    name: "guildRandomID",
    code: `
  $guildRandomID
  `
});
```
