---
title: $getUserInstallCount
description: $getUserInstallCount returns the approximate number of users who have authorized the bot.
id: getUserInstallCount
---

`$getUserInstallCount` returns the approximate number of users who have authorized the bot.

## Usage

```aoi
$getUserInstallCount
```

## Example(s)

This will return the approximate number of users who have authorized the bot:

```javascript
client.command({
    name: "userInstallCount",
    code: `
  $getUserInstallCount
  `
});
```
