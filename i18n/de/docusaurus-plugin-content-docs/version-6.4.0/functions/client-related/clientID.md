---
title: '$clientID'
description: '$clientID wird die Discord Benutzer-ID des Clients zurückgeben.'
id: clientID
---

`$clientID` wird die Discord Benutzer ID des Clients zurückgeben.

## Verwendung

```php
$clientID
```

## Beispiel(e)

Dies gibt die Client-ID zurück:

```javascript
bot.command({
    name: 'clientID',
    code: `
  $clientID
  `
});
```