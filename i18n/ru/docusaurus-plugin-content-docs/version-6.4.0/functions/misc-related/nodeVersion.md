---
title: $nodeVersion
description: '$nodeVersion вернёт текущую версию node.js.'
id: nodeVersion
---

`$nodeVersion` вернёт текущую версию node.js.

## Использование

```php
$nodeVersion
```

## Пример(ы)

Это вернет текущую версию node.js вашего бота на:

```javascript
bot.command({
    name: "nodeVersion",
    code: `
    $nodeVersion
    `
});
```