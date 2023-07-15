---
title: '$stopTimeout'
description: '$stopTimeout will end/stop a timeout created by $setTimeout.'
id: stopTimeout
---

`$stopTimeout` will end/stop a timeout created by `$setTimeout`.

## Використання

```php
$stopTimeout[id]
```

## Параметри

| Поле | Тип   | Опис        | Обов'язковий |
| ---- | ----- | ----------- |:------------:|
| id   | рядок | Timeout ID. |     так      |

## Приклад(и)

This will end a `$setTimeout` timeout:

```javascript
bot.command({
    name: "stopTimeout",
    code: `
    $stopTimeout[10029]
    `
});
```