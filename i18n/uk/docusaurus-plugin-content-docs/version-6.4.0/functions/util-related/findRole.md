---
title: '$findRole'
description: '$findRole will search and return a given role of a certain guild.'
id: findRole
---

`$findRole` will search and return a given role of a certain guild.

## Використання

```php
$findRole[roleResolver;guildID?]
```

## Параметри

| Поле         | Тип     | Опис                                   | Обов'язковий |
| ------------ | ------- | -------------------------------------- |:------------:|
| roleResolver | рядок   | Name of the role you want to find.     |     так      |
| guildID?     | integer | Guild ID where the role is present in. |      ні      |

## Приклад(и)

This will return the role ID of the role `Owner` if it exists:

```javascript
bot.command({
    name: 'findRole',
    code: `
  $findRole[Owner;$guildID]
  `
});
```
