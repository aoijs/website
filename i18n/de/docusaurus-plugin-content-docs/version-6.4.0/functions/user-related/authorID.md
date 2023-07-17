---
title: '$authorID'
description: '$authorID gibt die Benutzer-ID des Befehls zurück.'
id: authorID
---

`$authorID` gibt die Benutzer-ID zurück, wer den Befehl ausgeführt hat.

## Verwendung

```php
$authorID
```

## Beispiel(e)

Dies gibt Ihre Benutzer-ID zurück:

```javascript
bot.command({
    name: 'authorID',
    code: `
  $authorID
  `
});
```