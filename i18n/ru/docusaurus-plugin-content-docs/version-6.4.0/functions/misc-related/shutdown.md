---
title: $shutdown
description: '$shutdown завершит работу вашего бота.'
id: shutdown
---

`$shutdown` выключит / завершит процесс вашего бота.

## Использование

```php
$shutdown
```

## Пример(ы)

Это выключит вашего бота:

```javascript
bot.command({
    name: "shutdown",
    code: `
    $shutdown
    `
});
```