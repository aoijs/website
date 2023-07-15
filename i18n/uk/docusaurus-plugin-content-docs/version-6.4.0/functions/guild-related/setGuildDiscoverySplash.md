---
title: '$setGuildDiscoverySplash'
description: '$setGuildDiscoverySplash will change a Guild''s discovery splash banner.'
id: setGuildDiscoverySplash
---

`$setGuildDiscoverySplash` will change a Guild's discovery splash banner.

## Використання

```php
$setGuildDiscoverySplash[guildID?;URL;reason?]
```

## Параметри

| Поле     | Тип     | Опис                                                     | Обов'язковий |
| -------- | ------- | -------------------------------------------------------- | ------------ |
| guildID? | integer | Guild ID of the guild.                                   | ні           |
| URL      | рядок   | New discovery splash banner.                             | так          |
| reason?  | рядок   | Reason that will be displayed in the guild's audit logs. | ні           |

## Приклад(и)

This will change the banner of the current guild:

```javascript
bot.command({
    name: 'setGuildDiscoverySplash',
    code: `
  $setGuildDiscoverySplash[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```