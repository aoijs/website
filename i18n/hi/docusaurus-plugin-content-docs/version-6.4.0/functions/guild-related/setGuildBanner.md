---
title: '$setGuildBanner'
description: '$setGuildBanner will change a Guild''s banner.'
id: setGuildBanner
---

`$setGuildBanner` will change a Guild's banner.

## प्रोयोग

```php
$setGuildBanner[guildID?;URL;reason?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                             | चाहिए        |
| -------- | -------- | -------------------------------------------------------- | ------------ |
| guildID? | integer  | Guild ID of the guild.                                   | असत्य (नहीं) |
| URL      | स्ट्रिंग | New guild banner.                                        | true         |
| reason?  | स्ट्रिंग | Reason that will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

This will change the banner of the current guild:

```javascript
bot.command({
    name: 'setGuildBanner',
    code: `
  $setGuildBanner[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```
