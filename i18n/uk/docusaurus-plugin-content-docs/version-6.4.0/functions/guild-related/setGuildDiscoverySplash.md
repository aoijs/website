---
title: '$setGuildDiscoverySplash'
description: '$setGuildDiscoverySplash змінить баннер для відкриття Гільди.'
id: setGuildDiscoverySplash
---

`$setGuildDiscoverySplash` змінить банер для дослідження Гільдії.

## Використання

```php
$setGuildDiscoverySplash[guildID?;URL;reason?]
```

## Параметри

| Поле     | Тип   | Опис                                                 | Обов'язковий |
| -------- | ----- | ---------------------------------------------------- | ------------ |
| гільдія? | ціле  | ID гільдії (гільдії).                                | ні           |
| Адреса   | рядок | Нове відкриття сплешу банер.                         | так          |
| причина? | рядок | Причина відправлена в журналі розпізнавання гільдії. | ні           |

## Приклад(и)

Це змінить прапор поточного вигляду:

```javascript
bot.command({
    name: 'setGuildDiscoverySplash',
    код: `
  $setGuildDiscoverySplash[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```