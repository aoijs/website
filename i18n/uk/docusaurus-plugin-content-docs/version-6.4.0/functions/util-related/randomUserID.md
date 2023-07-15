---
title: '$randomUserID'
description: '$randomUserID will return a random username.'
id: randomUserID
---

`$randomUserID` will return a random username.

## Використання

```php
$randomUserID[global/guildID?]
```

## Параметри

| Поле            | Тип   | Опис                                                                     | Обов'язковий |
| --------------- | ----- | ------------------------------------------------------------------------ |:------------:|
| global/guildID? | рядок | Return a random user out of all guild or out of one specific guild only. |      ні      |

## Приклад(и)

This will return a random user id:

```javascript
bot.command({
    name: 'randomUserID',
    code: `
  $randomUserID[global]
  `
});
```
