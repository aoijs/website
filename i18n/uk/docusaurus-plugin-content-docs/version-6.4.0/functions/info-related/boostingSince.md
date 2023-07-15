---
title: '$boostingSince'
description: '$boostingSince will return the starting date of someone boosting a specific guild.'
id: boostingSince
---

`$boostingSince` will return the starting date of someone boosting a specific guild.

## Використання

```php
$boostingSince[guildID?;userID?;format?]
```

## Параметри

| Поле     | Тип     | Опис                                                                             | Обов'язковий |
| -------- | ------- | -------------------------------------------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild of where you want to check how long someone's been boosting. |      ні      |
| userID?  | integer | The user ID you want to check the boosting start date of.                        |      ні      |
| format?  | рядок   | The format that the date will be returned in, listed below.                      |      ні      |

| Format |                                                         |
| ------ | ------------------------------------------------------- |
| ms     | 1652643158052                                           |
| date   | Sun May 15 2022 20:32:38 GMT+0100 (British Summer Time) |

## Приклад(и)

This will return the date when you started boosting (wont work when you're not boosting):

```javascript
bot.command({
    name: 'boostingSince',
    code: `
  $boostingSince[$guildID;$authorID;date]
  `
});
```