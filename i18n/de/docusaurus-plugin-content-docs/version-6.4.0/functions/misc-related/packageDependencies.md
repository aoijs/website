---
title: $packageDependencies
description: '$packageDependencies gibt die Paket-Abhängigkeiten von aoi.js zurück.'
id: packageDependencies
---

`$packageDependencies` gibt die Paketabhängigkeiten von aoi.js zurück.

## Verwendung

```php
$packageDependencies
```

## Beispiel(e)

Dies gibt aoi.js' Paket-Abhängigkeiten zurück:

```javascript
bot.command({
    name: "packageDependencies",
    code: `
    $packageDependencies
    ` // Soll "@akarui/aoi.db, axios, discord-api-types, discord.js, undici"
});
```