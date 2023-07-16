---
title: '$readyTimestamp'
description: '$readyTimestamp wird den Zeitstempel zurückgeben, wenn der Bot bereit war.'
id: readyTimestamp
---

`$readyTimestamp` gibt den Zeitstempel zurück, wenn der Bot bereit war.

## Verwendung

```php
$readyTimestamp
```

## Beispiel(e)

Dies wird das letzte Mal, wenn dein Bot gestartet oder bereit war:

```javascript
bot.command({
    name: 'readyTimestamp',
    code: `
  $readyTimestamp
  `
});
```
