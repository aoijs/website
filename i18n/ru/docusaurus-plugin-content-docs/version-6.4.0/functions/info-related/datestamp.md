---
title: $datestamp
description: '$datestamp вернет день в MS.'
id: datestamp
---

`$datestamp` вернет день в MS.

## Использование

```php
$datestamp
```

## Пример(ы)

Это вернется день месяца, в MS ( мы используем $humanizeMS , чтобы сделать его читаемым):

```javascript
bot.command({
    name: 'datestamp',
    code: `
  $humanizeMS[$datestamp]
  `
});
```