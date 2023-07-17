---
title: $packageDependencies
description: '$packageDependencies возвращает зависимости пакета aoi.js.'
id: packageDependencies
---

`$packageDependencies` возвращает зависимости пакета aoi.js.

## Использование

```php
$packageDependencies
```

## Пример(ы)

Это приведет к возврату зависимостей пакета aoi.jes:

```javascript
bot.command({
    name: "packageDependencies",
    code: `
    $packageDependencies
    ` // Должен возвращать "@akarui/aoi.db, axios, discord-api-types, discord.js, undici"
});
```