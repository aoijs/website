---
title: '$setClientName'
description: '$setClientName will change the clients'' Discord Username.'
id: setClientName
---

`$setClientName` will change the clients' Discord Username.

## Використання

```php
$setClientName[username]
```

## Параметри

| Поле     | Тип   | Опис                     | Обов'язковий |
| -------- | ----- | ------------------------ |:------------:|
| username | рядок | The new client username. |     так      |

## Приклад(и)

This will change the client's username to the command author's username:

```javascript
bot.command({
    name: 'setClientName',
    code: `
   $setClientName[$username[$authorID]]`
});
```