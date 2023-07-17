---
title: '$setClientName'
description: '$setClientName змінить ім''я користувача Discord.'
id: setClientName
---

`$setClientName` змінить ім'я користувача Discord.

## Використання

```php
$setClientName[username]
```

## Параметри

| Поле             | Тип   | Опис                   | Обов'язковий |
| ---------------- | ----- | ---------------------- |:------------:|
| ім'я користувача | рядок | Нове ім'я користувача. |     так      |

## Приклад(и)

Змінить ім'я користувача користувача на ім'я користувача для адміністратора:

```javascript
bot.command({
    name: 'setClientName',
    код: `
   $setClientName[$username[$authorID]]`
});
```