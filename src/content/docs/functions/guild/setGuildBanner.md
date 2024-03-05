---
title: $setGuildBanner
description: $setGuildBanner will change a Guild's banner.
id: setGuildBanner
---

`$setGuildBanner` will change a Guild's banner.

## Usage

```php
$setGuildBanner[guildID?;URL;reason?]
```

## Parameters

| Field    | Type                                                                                              | Description                                              | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | -------- |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID of the guild.                                   | false    |
| URL      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New guild banner.                                        | true     |
| reason?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Reason that will be displayed in the guild's audit logs. | false    |

## Example(s)

This will change the banner of the current guild:

```javascript
client.command({
  name: "setGuildBanner",
  code: `
  $setGuildBanner[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```
