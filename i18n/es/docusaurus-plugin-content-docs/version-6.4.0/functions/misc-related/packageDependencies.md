---
title: '$packageDependencies'
description: '$packageDependencies devolverá las dependencias del paquete de aoi.js.'
id: packageDependencies
---

`$packageDependencies` retornará las dependencias del paquete de aoi.js.

## Uso

```php
$packageDependencies
```

## Ejemplo(s)

Esto devolverá las dependencias del paquete de aoi.js:

```javascript
bot.command({
    name: "packageDependencies",
    code: `
    $packageDependencies
    ` // Debe devolver "@akarui/aoi.db, axios, discord-api-types, discord.js, undici"
});
```