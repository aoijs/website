---
title: '$packageVersion'
description: '$packageVersion gibt Ihre aktuelle aoi.js-Version zurück.'
id: packageVersion
---

`$packageVersion` gibt Ihre aktuelle aoi.js-Version zurück.

## Verwendung

```php
$packageVersion
```

## Beispiel(e)

Dies gibt deine aktuelle aoi.js Version zurück:

```javascript
bot.command({
    name: "packageVersion",
    code: `
    $packageVersion
    `
});
```