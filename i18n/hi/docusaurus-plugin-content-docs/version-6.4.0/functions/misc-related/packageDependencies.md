---
title: '$packageDependencies'
description: '$packageDependencies will return aoi.js'' package dependencies.'
id: packageDependencies
---

`$packageDependencies` will return aoi.js' package dependencies.

## प्रोयोग

```php
$packageDependencies
```

## उदाहरण

This will return aoi.js' package dependencies:

```javascript
bot.command({
    name: "packageDependencies",
    code: `
    $packageDependencies
    ` // Should return "@akarui/aoi.db, axios, discord-api-types, discord.js, undici"
});
```