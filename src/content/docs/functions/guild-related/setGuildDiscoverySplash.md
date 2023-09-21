---
title: $setGuildDiscoverySplash
description: $setGuildDiscoverySplash will change a Guild's discovery splash banner.
id: setGuildDiscoverySplash
---

`$setGuildDiscoverySplash` will change a Guild's discovery splash banner.

## Usage

```php
$setGuildDiscoverySplash[guildID?;URL;reason?]
```

## Parameters

| Field    | Type    | Description                                              | Required |
| -------- | ------- | -------------------------------------------------------- | -------- |
| guildID? | integer | Guild ID of the guild.                                   | false    |
| URL      | string  | New discovery splash banner.                             | true     |
| reason?  | string  | Reason that will be displayed in the guild's audit logs. | false    |

## Example(s)

This will change the banner of the current guild:

```javascript
client.command({
  name: "setGuildDiscoverySplash",
  code: `
  $setGuildDiscoverySplash[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `,
});
```
