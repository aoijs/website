---
title: $databasePing
description: '$databasePing вернёт вашу базу данных пинг.'
id: databasePing
---

`$databasePing` вернёт вашу базу данных пинг.

## Использование

```php
$databasePing
```

## Пример(ы)

База данных будет возвращена:

```javascript
bot.command({
    name: 'databasePing',
    code: `
  Пик моей базы данных: $databasePing MS!
  «
});
```