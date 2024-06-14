---
title: $killClient
description: $killClient will forcefully shutdown your bot.
id: killClient
---

`$killClient` will forcefully shutdown your bot.

## Usage

```aoi
$killClient
```

## Example(s)

This will forcefully shutdown your bot:

```javascript
client.command({
    name: "killClient",
    code: `
    $killClient
    `
});
```
