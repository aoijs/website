---
title: $packageVersion
description: '$packageVersion вернет вашу текущую версию aoi.js.'
id: packageVersion
---

`$packageVersion` вернёт текущую версию aoi.js.

## Использование

```php
$packageVersion
```

## Пример(ы)

Текущая версия aoi.js будет возвращена:

```javascript
bot.command({
    name: "packageVersion",
    code: `
    $packageVersion
    `
});
```