---
title: $guildVanityURL
description: $guildVanityURL will return a guild's vanity URL.
id: guildVanityURL
---

`$guildVanityURL` will return a guild's vanity URL.

## Usage

```php
$guildVanityURL[guildID?]
```

## Parameters

| Field    | Type    | Description   | Required |
| -------- | ------- | ------------- | :------: |
| guildID? | integer | The guild ID. |  false   |

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
