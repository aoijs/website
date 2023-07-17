---
title: '$packageVersion'
description: '$packageVersion devolverá su versión actual de aoi.js.'
id: packageVersion
---

`$packageVersion` devolverá su versión actual de aoi.js.

## Uso

```php
$packageVersion
```

## Ejemplo(s)

devolverá su versión actual de aoi.js.

```javascript
bot.command({
    name: "packageVersion",
    code: `
    $packageVersion
    `
});
```