---
title: $datestamp
description: '$datestamp wird den Tag in MS zurückgeben.'
id: datestamp
---

`$datestamp` wird den Tag in MS zurückgeben.

## Verwendung

```php
$datestamp
```

## Beispiel(e)

Dies wird den Tag des Monats in MS zurückgeben (wir verwenden $humanizeMS um ihn lesbar zu machen):

```javascript
bot.command({
    name: 'datestamp',
    code: `
  $humanizeMS[$datestamp]
  `
});
```