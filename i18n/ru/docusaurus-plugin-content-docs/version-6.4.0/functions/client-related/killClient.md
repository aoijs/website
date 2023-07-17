---
title: $killClient
description: '$killClient принудительно выключит вашего бота.'
id: killClient
---

`$killClient` принудительно выключит вашего бота.

## Использование

```php
$killClient
```

## Пример(ы)

Это принудительно выключит вашего бота:

```javascript
bot.command({
    name: "killClient",
    code: `
    $killClient
    `
});
```