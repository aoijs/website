---
title: $guildIDS
description: $guildIDS will return the ID of every guild your bot is in.
id: guildIDS
---

`$guildIDS` will return the ID of every guild your bot is in.

## Usage

```aoi
$guildIDS[sep?]
```

## Parameters

| Field | Type                                                                                              | Description                                         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- | :------: |
| sep?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator to separate multiple returned values. |  false   |

## Example(s)

This will return all guild IDs your bot is in:

```javascript
client.command({
    name: "guildIDS",
    code: `
  $guildIDS[, ]
  `
});
```
