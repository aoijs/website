---
title: $packageDependencies
description: '$packageDependencies поверне залежності пакунків aoi.js.'
id: packageDependencies
---

`$packageDependencies` поверне залежності пакетів aoi.js.

## Використання

```php
$packageDependencies
```

## Приклад(и)

Це буде повертати залежності aoi.js:

```javascript
bot.command({
    name: "packageDependencies",
    код: `
    $packageDependencies
    ` // має повернути "@akarui/aoi.db, axios, discord-api-types, discord.js, undici"
});
```