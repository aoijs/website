---
title: '$findMember'
description: '$findMember will find a specific member in a specific guild by their name.'
id: findMember
---

`$findMember` will find a specific member in a specific guild.

## Використання

```php
$findMember[userResolver;returnSelf?;guildID?]
```

## Параметри

| Поле         | Тип     | Опис                                                  | Обов'язковий |
| ------------ | ------- | ----------------------------------------------------- |:------------:|
| userResolver | рядок   | User you want to find.                                |     так      |
| returnSelf?  | boolean | Return the author ID if the given user was not found. |      ні      |
| guildID?     | integer | Guild ID where the user is present in.                |      ні      |

## Приклад(и)

This will return your ID as `Leref` was not found in the given guild:

```javascript
bot.command({
    name: 'findMember',
    code: `
  $findMember[Leref;true;$guildID]
  `
});
```
