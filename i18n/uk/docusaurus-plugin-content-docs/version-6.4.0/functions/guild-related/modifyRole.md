---
title: '$modifyRole'
description: '$modifyRole змінить вказану роль.'
id: modifyRole
---

`$modifyRole` змінить вказану роль.

## Використання

```php
$modifyRole[guildID;roleID;...data]
```

## Параметри

| Поле     | Тип           | Опис                                 | Обов'язковий |
| -------- | ------------- | ------------------------------------ |:------------:|
| гільдія  | ціле          | ID гільдії в якому знаходиться роль. |     так      |
| roleID   | ціле          | ID ролі для зміни.                   |     так      |
| ... дані | рядок, об'єкт | Нові дані ролей.                     |     так      |

## Приклад(и)

Редагувати існуючу роль / змінити її ім'я на "Awesome!":

```javascript
bot.command({
    name: 'modifyRole',
    код: `
  $modifyRole[$guildID;roleID;{
    "name": "Awesome!"
  }]
  `
});
```