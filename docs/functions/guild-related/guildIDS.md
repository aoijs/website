---
title: $guildIDS
description: $guildIDS will return the ID of every guild your bot is in.
id: guildIDS
---

`$guildIDS` will return the ID of every guild your bot is in.

## Usage

```php
$guildIDS[sep?]
```

## Parameters

| Field | Type   | Description                                         | Required |
| ----- | ------ | --------------------------------------------------- | :------: |
| sep?  | string | The separator to separate multiple returned values. |  false   |

## Example(s)

This will return all guild IDs your bot is in:

```javascript
bot.command({
    name: 'guildIDS',
    code: `
  $guildIDS[, ]
  `
});
```
