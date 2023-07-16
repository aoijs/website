---
title: '$maxRam'
description: '$maxRam wird die maximale Anzahl an Ram zurückgeben.'
id: maxRam
---

`$maxRam` gibt die maximale Anzahl an Ram zurück.

## Verwendung

```php
$maxRam
```

## Beispiel(e)

Dies wird die maximale verfügbare Ram-Anzahl Ihres Bots:

```javascript
bot.command({
    name: 'maxRam',
    code: `
  $maxRam
  `
});
```
