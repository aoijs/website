---
title: '$guildVanityURL'
description: '$guildVanityURL will return a guild''s vanity URL.'
id: guildVanityURL
---

`$guildVanityURL` will return a guild's vanity URL.

## Використання

```php
$guildVanityURL[guildID?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. |      ні      |

## Приклад(и)

This will return the vanity URL of your guild, if you have one:

```javascript
bot.command({
    name: 'guildVanityURL',
    code: `
  $guildVanityURL[$guildID]
  `
});
```
