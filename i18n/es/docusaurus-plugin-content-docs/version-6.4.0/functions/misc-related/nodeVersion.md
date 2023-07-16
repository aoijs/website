---
title: '$nodeVersion'
description: '$nodeVersion devolverá su versión actual de node.js.'
id: nodeVersion
---

`$nodeVersion` devolverá su versión actual de node.js.

## Uso

```php
$nodeVersion
```

## Ejemplo(s)

Esto devolverá la versión actual de node.js en la que se está ejecutando tu bot:

```javascript
bot.command({
    name: "nodeVersion",
    code: `
    $nodeVersion
    `
});
```